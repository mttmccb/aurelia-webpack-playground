import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'isomorphic-fetch';

@inject(HttpClient)
export class Users {
  heading = 'Github Users';
  users = [];

  constructor(http) {
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('https://api.github.com/')
        .withInterceptor({
          response: (response) => response.json()
        });
    });

    this.http = http;
  }

  activate() {
    return this.http.fetch('users')
      .then(users => this.users = users);
  }
}
