/* global WOW */

$(document).ready(function() {
	'use strict';

	$('#nav').affix({
	      offset: {
	        top: $('header').height()-$('#nav').height()
	      }
	});

	(function () { new WOW().init(); })();

});
