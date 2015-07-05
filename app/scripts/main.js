/* global WOW, i18n, doTranslate */

'use strict';

i18n.init({
  ns: {
    namespaces: ['base']
  },
  fallbackLng: 'ko'
});

$(document).ready(function() {

  // WOW.js 설정
  new WOW().init();

  $('.fn-liquid').imgLiquid();

  $('.client-wrapper').tooltip();

  $(document).on('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

  $('.fn-lang-en').on('click', function(event) {
    event.preventDefault();
    i18n.setLng('en-US', function() {
      doTranslate();
    });
  });

  $('.fn-lang-ko').on('click', function(event) {
    event.preventDefault();
    i18n.setLng('ko-KR', function() {
      doTranslate();
    });
  });
});
