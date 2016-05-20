var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./alumnoData"], function (require, exports, aurelia_framework_1, alumnoData_1) {
    "use strict";
    let Alumno = class Alumno {
        constructor(alumnoData) {
            this.alumnoData = alumnoData;
        }
        getById(id) {
            this.alumnos = [];
            this.error = "";
            return this.alumnoData.getById(id)
                .then((alumno) => {
                this.alumnos.push(alumno.content);
            })
                .catch((error) => {
                this.error = error.statusText;
            });
        }
        activate() {
            return this.alumnoData.getAll().then((alumnos) => { this.alumnos = alumnos.content; });
        }
    };
    Alumno = __decorate([
        aurelia_framework_1.inject(alumnoData_1.AlumnoData)
    ], Alumno);
    exports.Alumno = Alumno;
});
//# sourceMappingURL=alumnos.js.map