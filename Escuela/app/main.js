define(["require", "exports"], function (require, exports) {
    "use strict";
    function configure(aurelia) {
        aurelia.use.standardConfiguration()
            .developmentLogging();
        aurelia.start().then((a) => a.setRoot("app"));
    }
    exports.configure = configure;
});
//# sourceMappingURL=main.js.map