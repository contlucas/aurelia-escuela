/*export interface IAlumno {
    IdAlumno?: number;
    Nombre: string;
    Apellido: string;
    Edad: number;
    Sexo?: TipoSexo;
}

export enum TipoSexo {
    Masculino = 0, Femenino = 1
}*/

export module ModuloAlumno {
    export interface IAlumno {
        IdAlumno?: number;
        Nombre: string;
        Apellido: string;
        Edad: number;
        Sexo?: TipoSexo;
        SexoString?: string;
    }

    export enum TipoSexo {
        Masculino, Femenino
    }
}