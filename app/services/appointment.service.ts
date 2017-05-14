import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
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
        console.log(requestedDate);
        let response = await this._http.get(Settings.SLOTS_API_ENDPOINT + '/' + new Date(requestedDate).toISOString()).toPromise();
        return response.json();
    }
}