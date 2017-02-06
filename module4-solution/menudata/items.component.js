// 6. Create `categories.component.js` file and create component called `categories` that shows all available categories in the menu to the user.
// menu_items": [
// {
// "id": 888,
// "short_name": "B1",
// "name": "Beef Egg Roll",
// "description": "eggroll with cabbage, carrots and beef",
// "price_small": null,
// "price_large": 3,
// "small_portion_name": null,
// "large_portion_name": null

// 8. The `categories` and the `items` components should *NOT* directly use the `MenuDataService` to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way `<` binding).

(function () {
'use strict';

angular.module('MenuApp')
.component('items', {
  templateUrl: 'items.template.html',
  controller: itemsComponentController
  // bindings: {
  //   items: '<',
  //   myTitle: '@title',
  //   onRemove: '&'
  // }
});


itemsComponentController.$inject = ['$rootScope', '$element', '$q', ' MenuDataService']
function itemsComponentController($rootScope, $element, $q,  MenuDataService) {
  var $ctrl = this;
  var items;

  $ctrl.$onInit = function () {
   items = "";
  };


  //$ctrl.$doCheck = function () {
    //if ($ctrl.items.length !== totalItems) {
      //totalItems = $ctrl.items.length;

      //$rootScope.$broadcast('shoppinglist:processing', {on: true});
      //var promises = [];
      //for (var i = 0; i < $ctrl.items.length; i++) {
      //  promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
      //}

      var promise =  MenuDataService.getItemsForCategory(categoryShortName)

      //$q.all(promises)
  
      .then(function (result) {
        
        items = result.data.menu_items;
        console.log("items : " + items);
        // var warningElem = $element.find('div.error');
        // warningElem.slideUp(900);
      })
      .catch(function (result) {
        // Show cookie warning
        // var warningElem = $element.find('div.error');
        // warningElem.slideDown(900);
      })
      .finally(function () {
       // $rootScope.$broadcast('shoppinglist:processing', { on: false });
      });
    //}
 // };

//   $ctrl.remove = function (myIndex) {
//     $ctrl.onRemove({ index: myIndex });
//   };
}

})();
