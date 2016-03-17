/* global $, document, i18next */

var doTranslate = function() {
  'use strict';
  $('.fineeco-section').localize();
  $('.chippoly-section').localize();
  $('.valuechain-section').localize();
};

var changeStyleByLng = function() {
  'use strict';
  var currentLng = i18next.language;
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

i18next.loadNamespaces('index', function() {
  'use strict';
  i18next.setDefaultNamespace('index');
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
