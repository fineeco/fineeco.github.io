/* global i18n */

'use strict';

var doTranslate = function() {
  $('.masthead-section').i18n();
  $('.history-section').i18n();
  $('.certification-section').i18n();
};

i18n.loadNamespace('about', function() {
  i18n.setDefaultNamespace('about');
  doTranslate();
});
