using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;

namespace Escuela
{
    public class AlumnosController : ApiController
    {

        private List<Alumno> alumnos = new List<Alumno>()
        {
                new Alumno() { IdAlumno = 1, Nombre = "Monica", Apellido = "Perez", Edad = 14, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 2, Nombre = "Jose", Apellido = "Gomez", Edad = 14, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 3, Nombre = "Maria", Apellido = "Gutierrez", Edad = 15, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 4, Nombre = "Nicolas", Apellido = "Ledesma", Edad = 16, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 5, Nombre = "Leonardo", Apellido = "Diaz", Edad = 13, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 6, Nombre = "Pablo", Apellido = "Suarez", Edad = 12, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 7, Nombre = "Diego", Apellido = "Acevedo", Edad = 13, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 8, Nombre = "Mirta", Apellido = "Muños", Edad = 14, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 9, Nombre = "Sonia", Apellido = "Alvarez", Edad = 15, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 10, Nombre = "Estefania", Apellido = "Figueroa", Edad = 16, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 11, Nombre = "Maricela", Apellido = "Lencina", Edad = 15, Sexo = TipoSexo.Femenino },
                new Alumno() { IdAlumno = 12, Nombre = "Oscar", Apellido = "Chavero", Edad = 17, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 13, Nombre = "Martin", Apellido = "Lezcano", Edad = 12, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 14, Nombre = "Mario", Apellido = "Zabala", Edad = 10, Sexo = TipoSexo.Masculino },
                new Alumno() { IdAlumno = 15, Nombre = "Gonzalo", Apellido = "Reinoso", Edad = 13, Sexo = TipoSexo.Masculino }
        };

        // GET api/<controller>
        public IEnumerable<Alumno> Get()
        {
            return alumnos;
        }

        // GET api/<controller>/5
        public Alumno Get(int id)
        {
            Alumno alumno = alumnos.FirstOrDefault(a => a.IdAlumno == id);

            if (alumno == null)
                throw new HttpResponseException(HttpStatusCode.NotFound);
            else
                return alumno;
        }
        [HttpPost]
        public void Post(object alumno)
        {
            int idNew = 0;
            Alumno result = null;
            JavaScriptSerializer json;

            idNew = alumnos.Max(x => x.IdAlumno) + 1;
            json = new JavaScriptSerializer();
            result = (Alumno)json.Deserialize(alumno.ToString(), typeof(Alumno));

            result.IdAlumno = idNew;
            alumnos.Add(result);
        }
    }
    public class Alumno
    {
        public int IdAlumno { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public int Edad { get; set; }
        public TipoSexo Sexo { get; set; }
    }
    public enum TipoSexo { Masculino = 0, Femenino = 1 }
}