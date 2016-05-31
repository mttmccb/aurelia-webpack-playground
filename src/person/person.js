import {bindable} from 'aurelia-framework';
import {BaseI18N} from 'aurelia-i18n';

export class Person extends BaseI18N {
  @bindable model;
  @bindable edit;
  @bindable remove;

  editItem() {
    this.edit({ item: this.model });
  }

  removeItem() {
    this.remove({ item: this.model });
  }
}
