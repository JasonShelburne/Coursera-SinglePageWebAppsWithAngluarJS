(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', foundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.searchTerm = "Enter a Search Term";
    //narrowCtrl.found = [];
   
    narrowCtrl.narrowItDown = function (searchTerm){ 

      var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
      //narrowCtrl.found = [];
      promise.then(function (response) {
          console.log("Result" + response);
           narrowCtrl.found = response;
        })
        .catch(function (error) {
          console.log(error);
        });
   };
};

function foundItems() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      found: '<',
      myTitle: '@title',
      badRemove: '=',
      onRemove: '&'
    },
    controller: foundItemsController,
    controllerAs: 'list',
    bindToController: true
  };

  return ddo;
};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;
  service.found = [];

  service.getMatchedMenuItems = function (searchTerm) {
    
      return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        }).then(function (result) {
            var foundItems = result.data.menu_items;
            var found = [];
            for (var i = 0; i < foundItems.length; i++) {
              if (foundItems[i].description.indexOf(searchTerm) != -1) {
                  console.log("foundItem : " + foundItems[i].description);
                  found.push(foundItems[i]);
              };
            };
          return found;
        }
     )

  };
     
};
    


})();