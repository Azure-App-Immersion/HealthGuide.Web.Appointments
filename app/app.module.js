"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var shell_component_1 = require("./components/shell.component");
var navigation_component_1 = require("./components/navigation.component");
var home_component_1 = require("./components/home.component");
var today_component_1 = require("./components/today.component");
var create_component_1 = require("./components/create.component");
var doctor_service_1 = require("./services/doctor.service");
var patient_service_1 = require("./services/patient.service");
var location_service_1 = require("./services/location.service");
var appointment_service_1 = require("./services/appointment.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    component: home_component_1.HomeComponent
                },
                {
                    path: 'create',
                    component: create_component_1.CreateComponent
                },
                {
                    path: 'today',
                    component: today_component_1.TodayComponent
                }
            ])
        ],
        declarations: [
            shell_component_1.ShellComponent,
            home_component_1.HomeComponent,
            navigation_component_1.NavigationComponent,
            today_component_1.TodayComponent,
            create_component_1.CreateComponent
        ],
        providers: [
            doctor_service_1.DoctorService,
            patient_service_1.PatientService,
            location_service_1.LocationService,
            appointment_service_1.AppointmentService,
        ],
        bootstrap: [shell_component_1.ShellComponent]
    })
], AppModule);
exports.AppModule = AppModule;
