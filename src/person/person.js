import {bindable} from 'aurelia-framework';

export class Person {
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
