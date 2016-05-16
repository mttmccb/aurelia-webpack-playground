/*eslint-disable no-var,no-unused-vars*/
var Promise = require('bluebird').config({longStackTraces: false, warnings: false}); // Promise polyfill for IE11

import { bootstrap } from 'aurelia-bootstrapper-webpack';

import 'bootstrap';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 5;
    })
    .plugin('aurelia-validatejs');

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
