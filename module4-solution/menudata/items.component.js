
(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'menudata/items.template.html',
  bindings: {
    items: '<'
  }
});


})();