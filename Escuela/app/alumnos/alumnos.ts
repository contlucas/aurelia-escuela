import {inject} from "aurelia-framework";
import {AlumnoData} from "./alumnoData";
import {ModuloAlumno} from "./ModuloAlumno";

@inject(AlumnoData)
export class Alumno {
    private alumnoData: AlumnoData;
    public alumnos: ModuloAlumno.IAlumno[];
    public error: string;

    constructor(alumnoData: AlumnoData) {
        this.alumnoData = alumnoData;
    }

    getById(id: number) {
        this.alumnos = [];
        this.error = "";

        return this.alumnoData.getById(id)
            .then(alumno => {
                this.alumnos.push(alumno.content);
            })
            .catch(error => {
                this.error = error.statusText;
            });
    }

    activate() {
        return this.alumnoData.getAll().then(response => {
            this.alumnos = response.content;

            for (var x = 0; x < this.alumnos.length; x++) {
                this.alumnos[x].SexoString = ModuloAlumno.TipoSexo[this.alumnos[x].Sexo];
            }
        });
    }
}