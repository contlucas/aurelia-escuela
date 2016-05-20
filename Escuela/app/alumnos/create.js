var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports", "aurelia-framework", "./alumnoData", "aurelia-router"], function (require, exports, aurelia_framework_1, alumnoData_1, aurelia_router_1) {
    "use strict";
    let Create = class Create {
        constructor(alumnoData, router) {
            this.alumnoData = alumnoData;
            this.router = router;
        }
        saveAlumno() {
            this.alumnoData.saveAlumno(this.alumno)
                .then(result => {
                let url = this.router.generate("alumnos");
                this.router.navigate(url);
            });
        }
    };
    Create = __decorate([
        aurelia_framework_1.inject(alumnoData_1.AlumnoData, aurelia_router_1.Router)
    ], Create);
    exports.Create = Create;
});
//# sourceMappingURL=create.js.map