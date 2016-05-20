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
    this.originalPerson = person;
    this.person = JSON.parse(JSON.stringify(person));
  }

  save(person, originalPerson) {
    if (person === undefined || person.firstName === undefined || person.lastName === undefined || person.firstName === '' || person.lastName === '') {
      alert('something invalid');
      return false;
    }
    this.controller.ok({ person: person, original: originalPerson});
  }
}
