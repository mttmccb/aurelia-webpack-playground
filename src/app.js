export class App {
  configureRouter(config, router) {
    config.options.pushState = true;
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',  moduleId: 'welcome',  nav: true, title: 'Welcome' },
      { route: ['people'],      name: 'people',   moduleId: 'people',   nav: true, title: 'People' }
    ]);

    this.router = router;
  }
}
