/* global WOW */

'use strict';

$(document).ready(function() {

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

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

});
