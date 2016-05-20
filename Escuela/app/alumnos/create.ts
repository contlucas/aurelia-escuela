﻿import {inject} from "aurelia-framework";
import {AlumnoData} from "./alumnoData";
import {Router} from "aurelia-router";
import {IAlumno} from "./IAlumno";

@inject(AlumnoData, Router)
export class Create {
    private alumnoData: AlumnoData;
    public alumno: IAlumno;
    private router: Router;

    constructor(alumnoData: AlumnoData, router: Router) {
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

}