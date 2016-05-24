
import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(I18N)
export class App {
  constructor(i18n) {
    this.i18n = i18n;
  }
  configureRouter(config, router) {
    config.options.pushState = true;
    config.title = this.i18n.tr('title');
    config.map([
      { route: ['', 'people'], name: 'people', moduleId: 'people', nav: true, title: 'Superheroes', settings: { t: 'superhero_plural' } }
    ]);

    this.router = router;
  }
}
