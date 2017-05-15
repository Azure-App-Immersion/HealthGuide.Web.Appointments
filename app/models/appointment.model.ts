import { Patient } from './patient.model';
import { Visit } from './visit.model';
import { Doctor } from './doctor.model';
import { Location } from './location.model';

export class Appointment {
    constructor () {
        this.patient = new Patient();
        this.visit = new Visit();
        this.doctor = new Doctor();
        this.location = new Location();
        this.checkedIn = false;
        this.completed = false;
    }
    public id : string;
    public patient : Patient;
    public doctor : Doctor;
    public visit : Visit;
    public slot : Date;
    public location : Location;
    public checkedIn : boolean;
    public completed : boolean;
}