/*eslint-disable no-var,no-unused-vars*/
var Promise = require('bluebird'); // Promise polyfill for IE11
Promise.config({
  warnings: true,
  longStackTraces: true,
  cancellation: false,
  monitoring: false
});

import 'intl'; // add this line if having issues with aurelia-18n in safari and ie

import { bootstrap } from 'aurelia-bootstrapper-webpack';

import 'bootstrap-webpack';
import 'font-awesome-webpack';
import '-!style!css!../node_modules/humane-js/themes/libnotify.css';
import '-!style!css!../styles/styles.css';

import XHR from 'i18next-xhr-backend';

function loadLocales(url, options, callback, data) {
  try {
    // include locale files as webpack chunks
    let waitForLocale = require('bundle!json!../locales/' + url + '.json');
    waitForLocale((locale) => {
      callback(locale, {status: '200'});
    });
  } catch (e) {
    callback(null, {status: '404'});
  }
}

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
    .plugin('aurelia-validatejs')
    .plugin('aurelia-notification', config => {
      config.configure({
        translate: true,
        notifications: {
          'success': 'humane-libnotify-success',
          'error': 'humane-libnotify-error',
          'info': 'humane-libnotify-info'
        }
      });
    })
    .plugin('aurelia-i18n', (instance) => {
      instance.i18next.use(XHR);

      return instance.setup({
        backend: {
          loadPath: '{{lng}}/{{ns}}',
          parse: (data) => data,
          ajax: loadLocales
        },
        lng: 'en',
        attributes: ['t', 'i18n'],
        fallbackLng: 'en',
        debug: false,
        //compatibilityJSON: 'v1',
        ns: ['translation']
      });
    });

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
