import {DialogController} from 'aurelia-dialog';
import {inject} from 'aurelia-framework';

@inject(DialogController)
export class Prompt {

  constructor(controller) {
    this.controller = controller;
    this.answer = null;
  }
  activate(question) {
    this.question = question;
  }
}
