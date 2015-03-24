/* global WOW */

$(document).ready(function() {
  'use strict';


  $('#nav').affix({
    offset: {
      top: $('header').height() - $('#nav').height()
    }
  });

  // WOW.js 설정
  (function() {
    new WOW().init();
  })();

});
