import {inject} from 'aurelia-framework';
import {I18N} from 'aurelia-i18n';

@inject(I18N)
export class LanguageSwitcher {
  constructor(i18n) {
    this.i18n = i18n;
  }

  attached() {
    this.languages = [
        { value: 'en', text: 'English'},
        { value: 'de', text: 'Deutsche'}
    ];
    this.selectedLanguage = 'en';
  }

  switchLanguage() {
    this.i18n.setLocale(this.selectedLanguage);
  }
}
