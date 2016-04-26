/* global $, document, WOW, i18next, i18nextXHRBackend, i18nextBrowserLanguageDetector, jqueryI18next, doTranslate, changeStyleByLng */

i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    ns: 'base'
  });

jqueryI18next.init(i18next, $);

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

  // WOW.js 설정
  new WOW().init();
});
