import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';

@inject(DialogController)
export class EditPerson {

  person = {
    firstName: '',
    lastName: ''
  };

  constructor(controller) {
    this.controller = controller;
  }

  activate(person) {
    this.person = person;
  }

  save(person) {
    if (person === undefined || person.firstName === undefined || person.lastName === undefined || person.firstName === '' || person.lastName === '') {
      return false;
    }
    this.controller.ok(person);
  }
}
