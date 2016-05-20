export function configure(aurelia: any) {
    aurelia.use.standardConfiguration()
        .developmentLogging();

    aurelia.start().then((a: any) => a.setRoot("app"));
}