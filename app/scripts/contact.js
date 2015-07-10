/* global i18n */

'use strict';

var doTranslate = function() {
  $('.address').i18n();
  $('.btn').i18n();
};

var changeStyleByLng = function() {
  return false;
};

i18n.loadNamespace('contact', function() {
  i18n.setDefaultNamespace('contact');
  doTranslate();
  changeStyleByLng();
});
