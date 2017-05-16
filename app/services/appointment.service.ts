import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Appointment } from '../models/appointment.model';
import { Visit } from '../models/visit.model';
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
        let requestUrl = Settings.SEARCH_API_ENDPOINT + new Date().toISOString();
        let response = await this._http.get(requestUrl).toPromise();
        return response.json();
    }
    public async GetVisits(appointment : Appointment) : Promise<Visit[]> {
        let requestUrl = Settings.VISITS_API_ENDPOINT + appointment.id;
        let response = await this._http.get(requestUrl).toPromise();
        return response.json();
    }
}