/* global i18n */

'use strict';

var doTranslate = function() {
  $('.chippoly-description-section').i18n();
  $('.chippoly-section').i18n();
  $('.sizes-description-section').i18n();
};

i18n.loadNamespace('product', function() {
  i18n.setDefaultNamespace('product');
  doTranslate();
});
