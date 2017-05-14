import { Component, OnInit } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'today',
  templateUrl: 'app/views/today.component.html'
})
export class TodayComponent {
  constructor (private _patientService: PatientService, private _appointmentService : AppointmentService) {}
}