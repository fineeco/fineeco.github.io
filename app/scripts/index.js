/* global $, i18n */

'use strict';

var doTranslate = function() {
  $('.fineeco-section').i18n();
  $('.chippoly-section').i18n();
  $('.valuechain-section').i18n();
};

var changeStyleByLng = function() {
  // var currentLng = i18n.lng();

  $('.title-first').toggleClass('h2');
  $('.title-second').toggleClass('h2');

  // if (currentLng === 'en-US') {
  //   $('.title-first').attr('title-first lng-en');
  //   $('.title-second').attr('title-second lng-en');
  // } else if (currentLng === 'ko-KR') {
  //   $('.title-first').attr('title-first lng-ko');
  //   $('.title-second').attr('title-second lng-ko');
  // } else {
  //   return false;
  // }
};

i18n.loadNamespace('index', function() {
  i18n.setDefaultNamespace('index');
  doTranslate();
  changeStyleByLng();
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
