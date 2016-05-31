import {inject} from 'aurelia-framework';
import {DialogController} from 'aurelia-dialog';
import {I18N, BaseI18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(I18N, Element, EventAggregator, DialogController)
export class EditPerson extends BaseI18N {
  constructor(i18n, element, ea, controller) {
    super(i18n, element, ea);
    this.controller = controller;
  }

  person = {
    firstName: '',
    lastName: ''
  };

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
