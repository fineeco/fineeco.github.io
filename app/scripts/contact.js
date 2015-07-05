/* global i18n */

'use strict';

var doTranslate = function() {
  $('.address').i18n();
  $('.btn').i18n();
};

i18n.loadNamespace('contact', function() {
  i18n.setDefaultNamespace('contact');
  doTranslate();
});
