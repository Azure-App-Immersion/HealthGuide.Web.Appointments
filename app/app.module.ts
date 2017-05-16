import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ShellComponent } from './components/shell.component';
import { NavigationComponent } from './components/navigation.component';
import { HomeComponent } from './components/home.component';
import { TodayComponent } from './components/today.component';
import { CreateComponent } from './components/create.component';
import { DoctorService } from './services/doctor.service';
import { PatientService } from './services/patient.service';
import { LocationService } from './services/location.service';
import { AppointmentService } from './services/appointment.service';

@NgModule({
    imports:      [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent
            },
            {
                path: 'create',
                component: CreateComponent
            },
            {
                path: 'today',
                component: TodayComponent
            }
        ])
    ],
    declarations: [ 
        ShellComponent,
        HomeComponent,
        NavigationComponent,
        TodayComponent,
        CreateComponent
    ],
    providers: [
        DoctorService,
        PatientService,
        LocationService,
        AppointmentService,
    ],
    bootstrap: [ ShellComponent ]
})
export class AppModule { }

