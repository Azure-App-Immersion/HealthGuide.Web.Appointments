import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from '../models/doctor.model';
import { Location } from '../models/location.model';
import { Appointment } from '../models/appointment.model';
import { DoctorService } from '../services/doctor.service';
import { LocationService } from '../services/location.service';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'create',
  templateUrl: 'app/views/create.component.html'
})
export class CreateComponent implements OnInit {
  public isLoading : boolean = true;
  public slotsReady : boolean = false;
  public availableSlots : Date[] = [];
  public doctors : Doctor[] = [];
  public locations : Location[] = [];
  public appointment : Appointment = new Appointment();
  constructor (private _router : Router, private _doctorService : DoctorService, private _locationService : LocationService, private _appointmentService : AppointmentService) {}
  public async ngOnInit() {
    this.doctors = await this._doctorService.GetDoctors();
    this.locations = await this._locationService.GetLocations();
    this.isLoading = false;
  }
  public async updateSlots(requestedDate : Date) {
    if (requestedDate) {
      this.slotsReady = true;
      this.availableSlots = await this._appointmentService.GetAppointmentSlots(requestedDate);
    }
    else {
      this.slotsReady = false;
    }
  }
  public async onFormSubmit() {
    this.appointment = await this._appointmentService.CreateAppointment(this.appointment);
    this._router.navigate(['/search/' + this.appointment.id]);
  }
}