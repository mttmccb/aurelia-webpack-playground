import {PeopleService} from './services/people-service';
import {inject} from 'aurelia-framework';
import {EditPerson} from './person/edit-person';
import {DialogService} from 'aurelia-dialog';

@inject(PeopleService, DialogService)
export class People {
  constructor(peopleService, dialogService) {
    this.peopleService = peopleService;
    this.dialogService = dialogService;
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
              //this.peopleService.createCard(response.output);
          }
      });
  }

  removePerson(person) {
    this.peopleService.removePerson(person);
  }
}
