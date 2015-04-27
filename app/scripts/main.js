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

  (function() {
    var menu = document.querySelector('.po-nav');
    var origOffsetY = menu.offsetTop;

    function scroll() {
      if ($(window).scrollTop() >= origOffsetY) {
        $('.po-navbar-slide').addClass('navbar-fixed-top');
        $('.po-nav-slide').addClass('nav-fixed-padding');
      } else {
        $('.po-navbar-slide').removeClass('navbar-fixed-top');
        $('.po-nav-slide').removeClass('nav-fixed-padding');
      }
    }

    document.onscroll = scroll;
  })();

  (function() {
    $('.nav li.dropdown').hover(function() {
      $(this).addClass('hovered');
    }, function() {
      $(this).removeClass('hovered');
    });


  })();

  (function() {
    if ($(window).width() > 992) {
      //Add Hover effect to menus
      $('.po-navbar ul.nav li.dropdown').hover(function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeIn(200);
      }, function() {
        $(this).find('.dropdown-menu').stop(true, true).fadeOut(100);
      });
    }
  })();

  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });

});
