export class PeopleService {
  constructor() {
    this.people = [];
  }

  createPerson() {
    this.people.push({firstName: `Person${this.people.length + 1}`, lastName: ''});
  }
  
  editPerson(person) {
    alert(person);
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
