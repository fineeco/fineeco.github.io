/* global $, i18n */

var doTranslate = function() {
  'use strict';
  $('.chippoly-description-section').i18n();
  $('.chippoly-section').i18n();
  $('.sizes-description-section').i18n();
};

var changeStyleByLng = function() {
  'use strict';
  return false;
};

i18n.loadNamespace('product', function() {
  'use strict';
  i18n.setDefaultNamespace('product');
  doTranslate();
  changeStyleByLng();
});
