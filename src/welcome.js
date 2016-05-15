import {inject, computedFrom} from 'aurelia-framework';
import {Validator, ValidationEngine, length, required, date, datetime, email, equality, url, numericality} from 'aurelia-validatejs';

export class Welcome {
  person;
  heading = 'Welcome to the Aurelia Navigation App';
  previousValue = this.fullName;
  constructor() {
    this.person = new Person();
    this.validator = new Validator(this.person)
      .ensure('firstName')
        .required()
      .ensure('lastName')
        .required();

    this.reporter = ValidationEngine.getValidationReporter(this.person);
    this.observer = this.reporter.subscribe(result => {
      console.log(result);
    });
  }

  @computedFrom('person')
  get fullName() {
    return this.person?
      `${this.person.firstName} ${this.person.lastName}`:
      '';
  }
  detached() {
    this.observer.dispose();
  }
  submit() {
    this.validator.validate();
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  canDeactivate() {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value) {
    return value && value.toUpperCase();
  }
}

class Person {
  firstName = 'John';
  lastName = 'Doe';
}
