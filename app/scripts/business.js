/* global i18n */

'use strict';

var doTranslate = function() {
  $('.company-description-section').i18n();
  $('.ourbiz-section').i18n();
};

i18n.loadNamespace('business', function() {
  i18n.setDefaultNamespace('business');
  doTranslate();
});
