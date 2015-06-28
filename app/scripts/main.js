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

  (function() {
    var detailsDelay = $('.po-slider-details').data('details-delay');
    var textDelay = $('.po-slider-text-container, .po-slider-text-container-static').data('text-delay');
    $(window).load(function() {
      $('.po-slider-load').fadeOut(200);
      $('.fn-load-block').delay(200).fadeOut(1000);
      $('.po-slider-details').delay(detailsDelay).fadeIn(0);
      $('.po-slider-text-container, .po-slider-text-container-static').delay(textDelay).fadeIn(0);
    });
  })();

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

});
