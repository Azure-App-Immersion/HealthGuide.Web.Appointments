import { Component, OnInit } from '@angular/core';
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
  public IsLoading : boolean = true;
  public SlotsReady : boolean = false;
  public AvailableSlots : Date[] = [];
  public Doctors : Doctor[] = [];
  public Locations : Location[] = [];
  public Appointment : Appointment = new Appointment();
  constructor (private _doctorService : DoctorService, private _locationService : LocationService, private _appointmentService : AppointmentService) {}
  public async ngOnInit() {
    await new Promise(resolve => setTimeout(resolve, 1500));
    this.Doctors = await this._doctorService.GetDoctors();
    this.Locations = await this._locationService.GetLocations();
    this.IsLoading = false;
  }
  public async updateSlots(requestedDate : Date) {
    if (requestedDate) {
      this.SlotsReady = true;
      this.AvailableSlots = await this._appointmentService.GetAppointmentSlots(requestedDate);
    }
    else {
      this.SlotsReady = false;
    }
  }
  public async onFormSubmit() {
    await this._appointmentService.CreateAppointment(this.Appointment);
  }
}