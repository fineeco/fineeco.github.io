/* global $, i18n */

var doTranslate = function() {
  'use strict';
  $('.chippoly-description-section').localize();
  $('.chippoly-section').localize();
  $('.sizes-description-section').localize();
};

var changeStyleByLng = function() {
  'use strict';
  return false;
};

i18next.loadNamespaces('product', function() {
  'use strict';
  i18next.setDefaultNamespace('product');
  doTranslate();
  changeStyleByLng();
});
