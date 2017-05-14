import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Location } from '../models/location.model';
import { Settings } from '../utilities/settings.constant';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class LocationService {
    constructor(private _http : Http) {}
    public async GetLocations() : Promise<Location[]> {
        let response = await this._http.get(Settings.LOCATIONS_API_ENDPOINT).toPromise();
        return response.json();
    }
}