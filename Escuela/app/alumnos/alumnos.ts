import {inject} from "aurelia-framework";
import {AlumnoData} from "./alumnoData";

@inject(AlumnoData)
export class Alumno {
    private alumnoData: AlumnoData;
    public alumnos: AlumnoData[];
    public error: string;

    constructor(alumnoData: AlumnoData) {
        this.alumnoData = alumnoData;
    }

    getById(id: number) {
        this.alumnos = [];
        this.error = "";

        return this.alumnoData.getById(id)
            .then((alumno: any) => {
                this.alumnos.push(alumno.content);
            })
            .catch((error: any) => {
                this.error = error.statusText;
            });
    }

    activate() {
        return this.alumnoData.getAll().then((alumnos: any) => { this.alumnos = alumnos.content });
    }
}