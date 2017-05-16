import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Appointment } from '../models/appointment.model';
import { Settings } from '../utilities/settings.constant';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppointmentService {
    constructor(private _http : Http) {}
    public async CreateAppointment(appointment : Appointment) : Promise<Appointment> {
        let response = await this._http.post(Settings.APPOINTMENTS_API_ENDPOINT, appointment).toPromise();
        return response.json();
    }
    public async GetAppointmentSlots(requestedDate : Date) : Promise<Date[]> {
        let requestUrl = Settings.SLOTS_API_ENDPOINT + '/' + new Date(requestedDate).toISOString();
        let response = await this._http.get(requestUrl).toPromise();
        return response.json();
    }
    public async SearchAppointments(query : string) : Promise<Appointment[]> {
        let requestUrl = Settings.SEARCH_API_ENDPOINT + '&facet=doctorName&facet=locationName&$count=true&$orderby=slot';
        let date = new Date();
        date.setHours(0);
        date.setMinutes(0);
        date.setSeconds(0);
        date.setMilliseconds(0);
        requestUrl += '&$filter=(slot ge ' + date.toISOString() + ')'
        if ((query || '').length > 0) {
            if (query.indexOf(' ') > -1) {
                requestUrl += '&queryType=full&search=' + query; 
            }
            else {
                requestUrl += '&queryType=full&search=' + '%2F.*' + query + '.*%2F';            
            }
        }
        else {
            requestUrl += '&queryType=simple&search=*';
        }
        var headers = new Headers();
        headers.append('api-key', Settings.SEARCH_API_KEY);
        console.dir(requestUrl);
        let response = await this._http.get(requestUrl, {
            headers: headers
        }).toPromise();
        console.dir(response.json());
        return response.json().value;
    }
}