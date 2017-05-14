import { Injectable } from '@angular/core';
import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentService {
    public async CreateAppointment(appointment : Appointment) : Promise<Appointment> {
        return null;
    }
    public async GetAppointmentSlots(requestedDate : Date) : Promise<Date[]> {
        return [
            new Date('2017-05-13T09:00:00'),
            new Date('2017-05-13T09:15:00'),
            new Date('2017-05-13T09:30:00'),
            new Date('2017-05-13T09:45:00'),
            new Date('2017-05-13T10:00:00'),
            new Date('2017-05-13T10:15:00'),
            new Date('2017-05-13T10:30:00'),
            new Date('2017-05-13T10:45:00'),
            new Date('2017-05-13T11:00:00'),
        ];
    }
}