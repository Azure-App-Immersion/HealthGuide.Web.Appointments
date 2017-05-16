"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var appointment_model_1 = require("../models/appointment.model");
var doctor_service_1 = require("../services/doctor.service");
var location_service_1 = require("../services/location.service");
var appointment_service_1 = require("../services/appointment.service");
var CreateComponent = (function () {
    function CreateComponent(_router, _doctorService, _locationService, _appointmentService) {
        this._router = _router;
        this._doctorService = _doctorService;
        this._locationService = _locationService;
        this._appointmentService = _appointmentService;
        this.isLoading = true;
        this.slotsReady = false;
        this.availableSlots = [];
        this.doctors = [];
        this.locations = [];
        this.appointment = new appointment_model_1.Appointment();
    }
    CreateComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._doctorService.GetDoctors()];
                    case 1:
                        _a.doctors = _c.sent();
                        _b = this;
                        return [4 /*yield*/, this._locationService.GetLocations()];
                    case 2:
                        _b.locations = _c.sent();
                        this.isLoading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    CreateComponent.prototype.updateSlots = function (requestedDate) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!requestedDate) return [3 /*break*/, 2];
                        this.slotsReady = true;
                        _a = this;
                        return [4 /*yield*/, this._appointmentService.GetAppointmentSlots(requestedDate)];
                    case 1:
                        _a.availableSlots = _b.sent();
                        return [3 /*break*/, 3];
                    case 2:
                        this.slotsReady = false;
                        _b.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CreateComponent.prototype.onFormSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._appointmentService.CreateAppointment(this.appointment)];
                    case 1:
                        _a.appointment = _b.sent();
                        this._router.navigate(['/']);
                        return [2 /*return*/];
                }
            });
        });
    };
    return CreateComponent;
}());
CreateComponent = __decorate([
    core_1.Component({
        selector: 'create',
        templateUrl: 'app/views/create.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, doctor_service_1.DoctorService, location_service_1.LocationService, appointment_service_1.AppointmentService])
], CreateComponent);
exports.CreateComponent = CreateComponent;
//# sourceMappingURL=create.component.js.map