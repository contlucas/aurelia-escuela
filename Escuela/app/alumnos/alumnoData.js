var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "aurelia-http-client"], function (require, exports, aurelia_framework_1, aurelia_http_client_1) {
    "use strict";
    let urlBase = "api/alumnos";
    let AlumnoData = class AlumnoData {
        constructor() {
            this.http = new aurelia_http_client_1.HttpClient();
        }
        getById(id) {
            return this.http.get(urlBase + "/" + id)
                .then(response => { return response; });
        }
        getAll() {
            return this.http.get(urlBase)
                .then(response => { return response; });
        }
        saveAlumno(alumno) {
            var request = this.http.createRequest(urlBase);
            request.asPost()
                .withHeader("Accept", "application/json")
                .withHeader("Content-Type", "application/json")
                .withContent(alumno);
            return request.send().then(response => response);
        }
    };
    AlumnoData = __decorate([
        aurelia_framework_1.inject(aurelia_http_client_1.HttpClient)
    ], AlumnoData);
    exports.AlumnoData = AlumnoData;
});
//# sourceMappingURL=alumnoData.js.map