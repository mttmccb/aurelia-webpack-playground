import {PersonModel} from '../person/person-model';
import {Notification} from 'aurelia-notification';
import {inject} from 'aurelia-framework';

@inject(Notification)
export class PeopleService {
  constructor(notification) {
    this.notification = notification;
    this.people = [];
    this.people.push(new PersonModel());
  }

  createPerson() {
    let person = new PersonModel();
    person.firstName = 'Green';
    person.lastName = 'Arrow';
    person.superPower = 'Luck';
    this.notification.success('new_hero_added');
    this.people.push(person);
  }

  editPerson(personObject) {
    let index = this.people.indexOf(personObject.original);
    if (index > -1) {
      this.people[index].firstName = personObject.person.firstName;
      this.people[index].lastName = personObject.person.lastName;
      this.people[index].superPower = personObject.person.superPower;
    }
    this.notification.success('hero_updated');
  }

  removePerson(person) {
    let index = this.people.indexOf(person);
    if (index > -1) {
      this.people.splice(index, 1);
    }
    this.notification.success('hero_removed');
  }

  clearPeople() {
    this.people = [];
    this.notification.success('heroes_removed');
  }
}
