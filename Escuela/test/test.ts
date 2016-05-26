import "mocha";
import * as chai from "chai";
import * as chaiAsPromised from "chai-as-promised";
import {AlumnoData} from "../app/alumnos/alumnoData";
import {ModuloAlumno} from "../app/alumnos/ModuloAlumno";

chai.use(chaiAsPromised);

let expect = chai.expect;
let should = chai.should;
let alumnoDataTest = new AlumnoData();
let alumno: ModuloAlumno.IAlumno;

mocha.setup({
    ui: "bdd",
    timeout: 7000
});

describe("Pruebas simples", () => {
    it("Prueba .not", () => {
        var var1 = "bar";
        expect(var1).to.not.equal("bar1");
    });

    it("Prueba to have property and not equal", () => {
        expect({ propiedad: "baz" }).to.have.property("propiedad").and.not.equal("bar");
    });

    var persona = {
        nombre: "lucas",
        apellido: "contreras",
        edad: 26
    };

    it("Prueba deep", () => {
        expect(persona).to.deep.equal({
            nombre: "lucas",
            apellido: "contreras",
            edad: 26
        });
    });

    it("Prueba any", () => {
        expect(persona).to.have.all.keys("nombre", "apellido", "edad");
    });

    it("Prueba a \"hola mundo\" debe ser string", () => {
        expect("hola mundo").to.be.a("string");
    });

    it("Prueba a null debe ser null", () => {
        expect(null).to.be.a("null");
    });

    it("Prueba a undefined debe ser undefined", () => {
        expect(undefined).to.be.a("undefined");
    });

    it("Prueba include, ([1, 2, 3])", () => {
        expect(([1, 2, 3])).to.include(2);
    });

    it("Prueba contains, ca en lucas", () => {
        expect("lucas").to.contain("ca");
    });

    it("Prueba true, true y 1 deben", () => {
        expect(true).to.be.true;
        expect(1).to.not.be.true;
    });

    it("Prueba false, false y 0 deben ser false", () => {
        expect(false).to.be.false;
        expect(0).to.not.be.false;
    });

    it("Prueba null, null debe ser null y undefined no debe ser null", () => {
        expect(null).to.be.null;
        expect(undefined).to.not.be.null;
    });

    it("Prueba undefined, undefined debe ser undefined y null debe no debe ser undefined", () => {
        expect(undefined).to.be.undefined;
        expect(null).to.not.be.undefined;
    });

    it("Prueba NaN, foo debe ser no numerico y 4 debe ser numerico", () => {
        expect('foo').to.be.NaN;
        expect(4).not.to.be.NaN;
    });

    it("Prueba exists, foo debe existir, es decir no tener un valor null, y bar y baz si", () => {
        var foo = 'hi', bar: any = null, baz: any;

        expect(foo).to.exist;
        expect(bar).to.not.exist;
        expect(baz).to.not.exist;
    });

    it("Prueba empty", () => {
        expect([]).to.be.empty;
        expect('a').to.be.empty;
        expect({}).to.be.empty;
    });

    it("Prueba arguments", () => {
        function test() {
            expect(arguments).to.be.arguments;
        }
    });

    it("Prueba equal", () => {
        expect('hello').to.equal('hello');
        expect(42).to.equal(42);
        expect(1).to.not.equal(true);
        expect({ foo: 'bar' }).to.not.equal({ foo: 'bar' });
        expect({ foo: 'bar' }).to.deep.equal({ foo: 'bar' });
    });
});

describe("Modulo Alumnos", () => {
    it("Obtener todos los alumnos: se espera codigo de estado 200", (done) => {
        expect(alumnoDataTest.getAll()
            .then(response => {
                return response.statusCode
            })).to.eventually.equal(200).notify(done);
    });

    it("Obtener solo un alumno: se espera codigo de estado 200", (done) => {
        expect(alumnoDataTest.getById(1)
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
        expect(alumnoDataTest.saveAlumno(alumno)
            .then(response => {
                return response.statusCode
            })).to.eventually.equal(200 | 204).notify(done);
    });

    it("Obtener solo un alumno con un codigo no numerico: se espera un codigo de estado 400 (bad request)", (done) => {
        expect(alumnoDataTest.getById("asd").catch((reason: any) => {
            done();
            return reason.statusCode;
        })).to.eventually.equal(400);
    });

    it("Obtener solo un alumno con un codigo que no existe: se espera un codigo de estado 404 (not found)", (done) => {
        expect(alumnoDataTest.getById(100).catch((reason: any) => {
            done();
            return reason.statusCode;
        })).to.eventually.equal(404);
    });
});

mocha.run();