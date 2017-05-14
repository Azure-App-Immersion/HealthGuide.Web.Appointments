import { Patient } from './patient.model';
import { Visit } from './visit.model';
import { Doctor } from './doctor.model';
import { Location } from './location.model';

export class Appointment {
    constructor () {
        this.Patient = new Patient();
        this.Visit = new Visit();
        this.Doctor = new Doctor();
        this.Location = new Location();
        this.CheckedIn = false;
    }
    public Patient : Patient;
    public Doctor : Doctor;
    public Visit : Visit;
    public Slot : Date;
    public Location : Location;
    public CheckedIn : boolean;
    public Completed : boolean;
}