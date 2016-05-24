import {PeopleService} from './services/people-service';
import {inject} from 'aurelia-framework';
import {EditPerson} from './person/edit-person';
import {DialogService} from 'aurelia-dialog';
import {I18N, BaseI18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(I18N, Element, EventAggregator, PeopleService, DialogService)
export class People extends BaseI18N {
  constructor(i18n, element, ea, peopleService, dialogService) {
    super(i18n, element, ea);
    this.peopleService = peopleService;
    this.dialogService = dialogService;
    this.i18n = i18n;
    this.element = element;
  }

  attached() {
    super.attached();
    this.i18n.setLocale('en');
  }

  createPerson() {
    this.peopleService.createPerson();
  }

  clearPeople() {
    this.peopleService.clearPeople();
  }

  editPerson(person) {
    this.dialogService.open({ viewModel: 'person/edit-person', model: person }).then(response => {
      if (!response.wasCancelled) {
        this.peopleService.editPerson(response.output);
      }
    });
  }

  removePerson(person) {
    this.peopleService.removePerson(person);
  }
}
