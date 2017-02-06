// 9. Create `routes.js` file and configure your routes and view states in it. These routes should be defined in the `MenuApp` module.
//   * *Hint:* don't try to define the states all at once. Define one state, including whatever it needs and make sure it works all the way to the point when you can see the results on the screen. Then, move on to the next view state. That *does* mean that you will have to leave `routes.js` and define all the other artifacts listed below and then come back to it, etc.
//   * *Hint:* The `home` state will not need a controller. Just a template.
//   * *Hint:* The `categories` state can have a `controller` as well as a `resolve`. The resolve will use the `MenuDataService` to retrieve categories and inject them into the controller. The controller can then expose the retrieved categories object such that it can be simply passed into the `categories` component.
//   * *Hint:* The `items` state can have the same type of setup as the `categories` state.

// When the user goes to `/` path in your application, a home screen should be shown. It's up to you what you place on the home screen. You can just say "Welcome to our Restaurant". The home screen should have a link to a list of categories of menu items in the restaurant. Clicking that link would obviously take the user to the `/categories` view.


(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'menudata/home.template.html'
  })

  // Categories list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'menudata/categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })



//   // Categories list page
//   .state('categories', {
//     url: '/categories',
//     templateUrl: 'src/menu/templates/categories.template.html',
//     controller: 'CategoriesController as categoriesCtrl',
//     resolve: {
//       items: ['MenuDataService', function (MenuDataService) {
//         return MenuDataService.getAllCategories();
//       }]
//     }
//   })

//   .state('itemDetail', {
//     url: '/item-detail/{itemId}',
//     templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
//     controller: 'ItemDetailController as itemDetail',
//     resolve: {
//       item: ['$stateParams', 'ShoppingListService',
//             function ($stateParams, ShoppingListService) {
//               return ShoppingListService.getItems()
//                 .then(function (items) {
//                   return items[$stateParams.itemId];
//                 });
//             }]
//     }
//   });
}

})();
