import {PersonModel} from '../person/person-model';

export class PeopleService {
  constructor() {
    this.people = [];
    this.people.push(new PersonModel());
  }

  createPerson() {
    let person = new PersonModel();
    person.firstName = 'Green';
    person.lastName = 'Arrow';
    person.superPower = 'Luck';
    this.people.push(person);
  }

  editPerson(personObject) {
    let index = this.people.indexOf(personObject.original);
    if (index > -1) {
      this.people[index].firstName = personObject.person.firstName;
      this.people[index].lastName = personObject.person.lastName;
      this.people[index].superPower = personObject.person.superPower;
    }
  }

  removePerson(person) {
    let index = this.people.indexOf(person);
    if (index > -1) {
      this.people.splice(index, 1);
    }
  }

  clearPeople() {
    this.people = [];
  }
}
