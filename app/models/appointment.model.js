"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var patient_model_1 = require("./patient.model");
var visit_model_1 = require("./visit.model");
var doctor_model_1 = require("./doctor.model");
var location_model_1 = require("./location.model");
var Appointment = (function () {
    function Appointment() {
        this.patient = new patient_model_1.Patient();
        this.visit = new visit_model_1.Visit();
        this.doctor = new doctor_model_1.Doctor();
        this.location = new location_model_1.Location();
        this.checkedIn = false;
        this.completed = false;
    }
    return Appointment;
}());
exports.Appointment = Appointment;
//# sourceMappingURL=appointment.model.js.map