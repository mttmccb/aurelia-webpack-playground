import {PersonModel} from '../person/person-model';
import {Notification} from 'aurelia-notification';
import {inject} from 'aurelia-framework';
import {I18N, BaseI18N} from 'aurelia-i18n';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(I18N, Element, EventAggregator, Notification)
export class PeopleService extends BaseI18N {
  constructor(i18n, element, ea, notification) {
    super(i18n, element, ea);
    this.notification = notification;
    this.people = [];
    this.people.push(new PersonModel());
  }

  createPerson() {
    let person = new PersonModel();
    person.firstName = 'Green';
    person.lastName = 'Arrow';
    person.superPower = 'Luck';
    this.notification.success(this.i18n.tr('new_hero_added'));
    this.people.push(person);
  }

  editPerson(personObject) {
    let index = this.people.indexOf(personObject.original);
    if (index > -1) {
      this.people[index].firstName = personObject.person.firstName;
      this.people[index].lastName = personObject.person.lastName;
      this.people[index].superPower = personObject.person.superPower;
    }
    this.notification.success(this.i18n.tr('hero_updated'));
  }

  removePerson(person) {
    let index = this.people.indexOf(person);
    if (index > -1) {
      this.people.splice(index, 1);
    }
    this.notification.success(this.i18n.tr('hero_removed'));
  }

  clearPeople() {
    this.people = [];
    this.notification.success(this.i18n.tr('heroes_removed'));
  }
}
