export class App {
  configureRouter(config, router) {
    config.options.pushState = true;
    config.title = 'Hero Chronicle';
    config.map([
      { route: ['','people'],      name: 'people',   moduleId: 'people',   nav: true, title: 'Superheroes' }
    ]);

    this.router = router;
  }
}
