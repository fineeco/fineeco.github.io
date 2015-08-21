/* global $, i18n */

var doTranslate = function() {
  'use strict';
  $('.address').i18n();
  $('.btn').i18n();
};

var changeStyleByLng = function() {
  'use strict';
  return false;
};

i18n.loadNamespace('contact', function() {
  'use strict';
  i18n.setDefaultNamespace('contact');
  doTranslate();
  changeStyleByLng();
});
