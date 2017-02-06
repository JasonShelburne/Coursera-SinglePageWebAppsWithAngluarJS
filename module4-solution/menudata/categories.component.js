// 7. Create `items.component.js` file and create a component called `items` that shows all of the menu items for a particular category.
// 8. The `categories` and the `items` components should *NOT* directly use the `MenuDataService` to fetch their own data. Instead, the proper data should be simply passed into the component. (Hint: use the one-way `<` binding).

// "id": 81,
// "short_name": "L",
// "name": "Lunch",
// "special_instructions": "Sunday-Friday 11:15am-3:00pm. Served with your choice of rice (Vegetable Fried RIce, Steamed Rice, Brown Rice), AND EITHER soup (Hot & Sour, Wonton, Vegetable, Egg Drop, Chicken Corn Soup) OR veggie egg roll. $1.00 extra to have both soup and egg roll.",
// "url": "https://davids-restaurant.herokuapp.com/categories/81.json"

(function () {
'use strict';

angular.module('MenuApp')
.component('categories', {
  templateUrl: 'categories.template.html',
  bindings: {
    categoryList: '<categoryList'
  }
});


// categoriesComponentController.$inject = ['$rootScope', '$element', '$q', ' MenuDataService']
// function categoriesComponentController($rootScope, $element, $q,  MenuDataService) {
//   var $ctrl = this;
//   var allCategories;

//   $ctrl.$onInit = function () {
//     allCategories = "";
//   };


  //$ctrl.$doCheck = function () {
    //if ($ctrl.items.length !== totalItems) {
      //totalItems = $ctrl.items.length;

      //$rootScope.$broadcast('shoppinglist:processing', {on: true});
      //var promises = [];
      //for (var i = 0; i < $ctrl.items.length; i++) {
      //  promises.push(WeightLossFilterService.checkName($ctrl.items[i].name));
      //}

      // var promise =  MenuDataService.getAllCategories()

      // //$q.all(promises)
  
      // .then(function (result) {
        
      //   allCategories = result.data;
      //   console.log("all categories : " +allCategories);
      //   // var warningElem = $element.find('div.error');
      //   // warningElem.slideUp(900);
      // })
      // .catch(function (result) {
      //   // Show cookie warning
      //   // var warningElem = $element.find('div.error');
      //   // warningElem.slideDown(900);
      // })
      // .finally(function () {
      //  // $rootScope.$broadcast('shoppinglist:processing', { on: false });
      // });
    //}
 // };


//}

})();
