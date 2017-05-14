import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Doctor } from '../models/doctor.model';
import { Settings } from '../utilities/settings.constant';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DoctorService {
    constructor(private _http : Http) {}
    public async GetDoctors() : Promise<Doctor[]> {
        let response = await this._http.get(Settings.DOCTORS_API_ENDPOINT).toPromise();
        return response.json();
    }
}