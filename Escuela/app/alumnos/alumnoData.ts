import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";
import {IAlumno} from "IAlumno";

let urlBase = "api/alumnos";

@inject(HttpClient)
export class AlumnoData {
    private http: HttpClient;
    private alumno: IAlumno;

    constructor() {
        this.http = new HttpClient();
    }

    getById(id: any) {
        return this.http.get(urlBase + "/" + id)
            .then(response => { return response });
    }

    getAll() {
        return this.http.get(urlBase)
            .then(response => { return response });
    }

    saveAlumno(alumno: IAlumno) {
        var request = this.http.createRequest(urlBase);

        request.asPost()
            .withHeader("Accept", "application/json")
            .withHeader("Content-Type", "application/json")
            .withContent(alumno);

        return request.send().then(response => response);
    }
}