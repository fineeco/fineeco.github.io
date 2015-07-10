/* global WOW, i18n, doTranslate, changeStyleByLng */

'use strict';

i18n.init({
  lng: 'ko-KR',
  ns: {
    namespaces: ['base']
  }
});

$(document).ready(function() {

  // WOW.js 설정
  new WOW().init();

  $('.fn-liquid').imgLiquid();

  $('.client-wrapper').tooltip();

  $('.fn-lang-en').on('click', function(event) {
    event.preventDefault();
    i18n.setLng('en-US', function() {
      doTranslate();
      changeStyleByLng();
    });
  });

  $('.fn-lang-ko').on('click', function(event) {
    event.preventDefault();
    i18n.setLng('ko-KR', function() {
      doTranslate();
      changeStyleByLng();
    });
  });
});
