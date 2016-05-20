define(["require", "exports"], function (require, exports) {
    "use strict";
    class App {
        configureRouter(config, router) {
            config.map([
                {
                    route: "",
                    moduleId: "./default",
                    title: "Home",
                    nav: true,
                    name: "home"
                },
                {
                    route: "alumnos",
                    moduleId: "./alumnos/alumnos",
                    title: "Alumnos",
                    nav: true,
                    name: "alumnos"
                },
                {
                    route: "alumnos/details/:id",
                    moduleId: "./alumnos/details",
                    title: "Detalle",
                    nav: false,
                    name: "details"
                },
                {
                    route: "alumnos/create",
                    moduleId: "./alumnos/create",
                    title: "Crear Alumno",
                    nav: false,
                    name: "create"
                }
            ]);
            this.router = router;
        }
    }
    exports.App = App;
});
//# sourceMappingURL=app.js.map