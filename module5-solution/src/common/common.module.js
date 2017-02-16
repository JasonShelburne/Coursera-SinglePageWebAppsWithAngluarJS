(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://sheltered-spire-57560.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
