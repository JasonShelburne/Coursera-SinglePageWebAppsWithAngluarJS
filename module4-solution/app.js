(function ( ) {

'use strict';

angular.module('MenuApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");
//.constant('ApiBasePath', "http://localhost:8000/module3-solution")

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
    var narrowCtrl = this;
    narrowCtrl.searchTerm = "Enter a Search Term";
    narrowCtrl.found = [];
   
    narrowCtrl.narrowItDown = function (searchTerm){
      var promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm);
      promise.then(function (result) {
          console.log("Result" + result);
           narrowCtrl.found = result;
        })
        .catch(function (error) {
          console.log(error);
        });
   };

    narrowCtrl.removeItem = function(index){
      narrowCtrl.found.splice(index,1);
    };

};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

      return $http(
          {
            method: "GET",
            url: (ApiBasePath + "/menu_items.json")
          }
        )
        .then(
            function (result) {
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
    

// function  FoundItems() {
//   var ddo = {
//     templateUrl: 'foundItems.html',
//     scope: {
//       foundItems: '=foundItems',
//       onRemove: '&'
//     }
//   };
//   console.log("items : " + foundItems);
//   console.log("onRemove: " + onRemove);
//   return ddo;
// };

function FoundItems() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        items: '<',
        onRemove: '&'
      }
    };

    return ddo;
  }


})();
