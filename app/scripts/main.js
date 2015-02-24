$(document).ready(function() {
	'use strict';

	$('#nav').affix({
	      offset: {
	        top: $('header').height()-$('#nav').height()
	      }
	});

});
