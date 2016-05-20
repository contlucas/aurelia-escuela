import "mocha";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import {AlumnoData} from "../app/alumnos/alumnoData";
import {ModuloAlumno} from "../app/alumnos/ModuloAlumno";

chai.use(chaiAsPromised);

let expect = chai.expect;
let should = chai.should;
let alumnoTest = new AlumnoData();
let alumno: ModuloAlumno.IAlumno;

mocha.setup({
    ui: "bdd",
    timeout: 7000
});

describe("Modulo Alumnos", () => {
    it("Obtener todos los alumnos: se espera codigo de estado 200", (done) => {
        expect(alumnoTest.getAll()
            .then(response => {
                return response.statusCode
            })).to.eventually.equal(200).notify(done);
    });

    it("Obtener solo un alumno: se espera codigo de estado 200", (done) => {
        expect(alumnoTest.getById(1)
            .then(response => {
                return response.statusCode
            })).to.eventually.equal(200).notify(done);
    });

    alumno = {
        Nombre: "lucas",
        Apellido: "contreras",
        Edad: 26
    };

    it("Guardar un alumno: se espera codigo de estado 200 o 204 si no devuelve contenido", (done) => {
        expect(alumnoTest.saveAlumno(alumno)
            .then(response => {
                return response.statusCode
            })).to.eventually.equal(200 | 204).notify(done);
    });

    it("Obtener solo un alumno con un codigo no numerico: se espera un codigo de estado 400 (bad request)", (done) => {
        expect(alumnoTest.getById("asd").catch((reason: any) => {
            done();
            return reason.statusCode;
        })).to.eventually.equal(400);
    });

    it("Obtener solo un alumno con un codigo que no existe: se espera un codigo de estado 404 (not found)", (done) => {
        expect(alumnoTest.getById(100).catch((reason: any) => {
            done();
            return reason.statusCode;
        })).to.eventually.equal(404);
    });
});

mocha.run();