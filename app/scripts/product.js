/* global $, i18next */

var doTranslate = function() {
  'use strict';

  $('.chippoly-description-section').localize();
  $('.chippoly-section').localize();
  $('.sizes-description-section').localize();
};

var changeStyleByLng = function() {
  'use strict';

  return false;
};

$(document).ready(function() {
  'use strict';

  i18next.loadNamespaces('product', function() {
    i18next.setDefaultNamespace('product');
    doTranslate();
    changeStyleByLng();
  });
});
