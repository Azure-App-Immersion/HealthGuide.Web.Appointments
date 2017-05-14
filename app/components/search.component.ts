import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { AppointmentService } from '../services/appointment.service';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'search',
  templateUrl: 'app/views/search.component.html'
})
export class SearchComponent implements OnInit {
  public Query : any;
  constructor (private _route: ActivatedRoute, private _appointmentService : AppointmentService) {}
  public ngOnInit(): void {
    this._route.params
      .subscribe(params => {
        console.log('tested params');
        this.setQuery(params['query']);
      });    
  }
  private setQuery(query : string) {
    console.log('query value', query);
    this.Query = query;
    this.search();
  }
  private search() {

  }
}