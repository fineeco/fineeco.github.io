/* global $, document, i18next */

var doTranslate = function() {
  'use strict';
  $('.masthead-section').localize();
  $('.history-section').localize();
  $('.certification-section').localize();
};

var changeStyleByLng = function() {
  'use strict';
  var currentLng = i18next.language;
  if (currentLng === 'en-US') {
    $('.name').attr('class', 'name lng-en');
    $('.iso9001').attr('src', 'images/iso9001-en.jpg');
    $('.iso9001-wrapper').attr('href', 'images/iso9001-en.jpg');
    $('.iso14001').attr('src', 'images/iso14001-en.jpg');
    $('.iso14001-wrapper').attr('href', 'images/iso14001-en.jpg');
  } else if (currentLng === 'ko-KR') {
    $('.name').attr('class', 'name lng-ko');
    $('.iso9001').attr('src', 'images/iso9001-ko.jpg');
    $('.iso9001-wrapper').attr('href', 'images/iso9001-ko.jpg');
    $('.iso14001').attr('src', 'images/iso14001-ko.jpg');
    $('.iso14001-wrapper').attr('href', 'images/iso14001-ko.jpg');
  } else {
    return false;
  }
};

i18next.loadNamespaces('about', function() {
  'use strict';
  i18next.setDefaultNamespace('about');
  doTranslate();
  changeStyleByLng();
});

$(document).ready(function() {
  'use strict';
  $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
  });
});
