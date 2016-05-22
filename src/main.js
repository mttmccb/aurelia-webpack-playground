/*eslint-disable no-var,no-unused-vars*/
var Promise = require('bluebird'); // Promise polyfill for IE11
// Bluebird config
Promise.config({
    // Enable warnings
    warnings: true,
    // Enable long stack traces
    longStackTraces: true,
    // Enable cancellation
    cancellation: false,
    // Enable monitoring
    monitoring: false
});

import { bootstrap } from 'aurelia-bootstrapper-webpack';

import 'bootstrap-webpack';
import 'font-awesome-webpack';
import '-!style!css!../styles/styles.css';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../node_modules/humane-js/themes/libnotify.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-validatejs')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 5;
    })
    .plugin('aurelia-validatejs');

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
