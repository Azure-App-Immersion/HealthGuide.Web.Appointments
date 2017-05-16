import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import { Appointment } from '../models/appointment.model';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'today',
  templateUrl: 'app/views/today.component.html'
})
export class TodayComponent implements OnInit {
  public results : Appointment[] = [];
  public query : string;
  constructor (private _route: ActivatedRoute, private _appointmentService : AppointmentService) {}
  public ngOnInit() {
    this._route.params
      .subscribe(async params => {
        await this.setQuery(params['query']);
      });    
  }
  private async setQuery(query : string) {
    this.query = query;
    await this.search();
  }
  private async search() {
    this.results = await this._appointmentService.SearchAppointments(this.query);
  }
}