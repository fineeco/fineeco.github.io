/* global $, i18next */

var doTranslate = function() {
  'use strict';

  $('.company-description-section').localize();
  $('.ourbiz-section').localize();
};

var changeStyleByLng = function() {
  'use strict';

  return false;
};

$(document).ready(function() {
  'use strict';

  i18next.loadNamespaces('business', function() {
    i18next.setDefaultNamespace('business');
    doTranslate();
    changeStyleByLng();
  });
});
