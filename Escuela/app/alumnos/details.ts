import {inject} from "aurelia-framework";
import {AlumnoData} from "./alumnoData";
import {ModuloAlumno} from "./ModuloAlumno";

@inject(AlumnoData)
export class Details {
    private alumnoData: AlumnoData;
    private alumno: ModuloAlumno.IAlumno;

    constructor(alumnoData: AlumnoData) {
        this.alumnoData = alumnoData;
    }

    activate(params: any) {
        return this.alumnoData.getById(params.id)
            .then(response => { this.alumno = response.content });
    }
}