/* global $, i18n */

'use strict';

var doTranslate = function() {
  $('.company-description-section').i18n();
  $('.ourbiz-section').i18n();
};

var changeStyleByLng = function() {
  return false;
};

i18n.loadNamespace('business', function() {
  i18n.setDefaultNamespace('business');
  doTranslate();
  changeStyleByLng();
});
