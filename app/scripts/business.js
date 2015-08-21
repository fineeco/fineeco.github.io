/* global $, i18n */

var doTranslate = function() {
  'use strict';
  $('.company-description-section').i18n();
  $('.ourbiz-section').i18n();
};

var changeStyleByLng = function() {
  'use strict';
  return false;
};

i18n.loadNamespace('business', function() {
  'use strict';
  i18n.setDefaultNamespace('business');
  doTranslate();
  changeStyleByLng();
});
