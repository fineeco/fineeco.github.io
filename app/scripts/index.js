/* global i18n */

'use strict';

var doTranslate = function() {
  $('.fineeco-section').i18n();
  $('.chippoly-section').i18n();
  $('.valuechain-section').i18n();
};

i18n.loadNamespace('index', function() {
  i18n.setDefaultNamespace('index');
  doTranslate();
});

$(document).ready(function() {
  $('#fullpage').fullpage({
    css3: true,
    navigation: true,
    navigationPosition: 'right',
    fixedElements: '#nav',
    scrollBar: true
  });
});
