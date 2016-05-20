import {computedFrom} from 'aurelia-framework';

export class PersonModel {
  firstName = 'The';
  lastName = 'Flash';
  superPower = 'Speed';
 
  @computedFrom('firstName', 'lastName')
  get fullName() { return `${this.firstName} ${this.lastName}`; }
}
