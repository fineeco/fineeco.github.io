/* global WOW */

'use strict';

$(document).ready(function() {

  $('#nav').affix({
    offset: {
      top: $('header').height() - $('#nav').height()
    }
  });

  // WOW.js 설정
  (function() {
    new WOW().init();
  })();

  (function() {
    $('.fn-liquid').imgLiquid();
  })();

  (function() {
    $('.client-wrapper').tooltip();
  })();

});
