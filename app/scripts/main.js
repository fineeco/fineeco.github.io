/* global $, document, WOW, i18n, doTranslate, changeStyleByLng */

i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    ns: 'base'
  });

jqueryI18next.init(i18next, $);

// WOW.js 설정
new WOW().init();

$(document).ready(function() {
  'use strict';

  $('.fn-liquid').imgLiquid();

  $('.client-wrapper').tooltip();

  $('.fn-lang-en').on('click', function(event) {
    event.preventDefault();
    i18next.changeLanguage('en-US', function() {
      doTranslate();
      changeStyleByLng();
    });
  });

  $('.fn-lang-ko').on('click', function(event) {
    event.preventDefault();
    i18next.changeLanguage('ko-KR', function() {
      doTranslate();
      changeStyleByLng();
    });
  });
});
