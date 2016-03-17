/* global $, document, i18n */

var doTranslate = function() {
  'use strict';
  $('.fineeco-section').i18n();
  $('.chippoly-section').i18n();
  $('.valuechain-section').i18n();
};

var changeStyleByLng = function() {
  'use strict';
  var currentLng = i18n.lng();
  if (currentLng === 'en-US') {
    $('.title-first').attr('class', 'title-first lng-en');
    $('.title-second').attr('class', 'title-second lng-en');
  } else if (currentLng === 'ko-KR') {
    $('.title-first').attr('class', 'title-first lng-ko');
    $('.title-second').attr('class', 'title-second lng-ko');
  } else {
    return false;
  }
};

i18n.loadNamespace('index', function() {
  'use strict';
  i18n.setDefaultNamespace('index');
  doTranslate();
  changeStyleByLng();
});

$(document).ready(function() {
  'use strict';
  $('#fullpage').fullpage({
    css3: true,
    navigation: true,
    navigationPosition: 'right',
    fixedElements: '#nav',
    scrollBar: true
  });
});
