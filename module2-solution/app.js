(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.toBuyList = ShoppingListCheckOffService.getToBuyItems();
    toBuy.errorMessage = "Everything is bought!"
    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };
};


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
   var bought = this;
   bought.items = ShoppingListCheckOffService.getBoughtItems();
   bought.errorMessage = "Nothing bought yet."
   bought.isEmpty = ShoppingListCheckOffService.getBoughtItems().length == 0;
   bought.boughtItems = function () {
      ShoppingListCheckOffService.getBoughtItems();
   };
};

function ShoppingListCheckOffService($log) {
  var service = this;

  var toBuyList = [
    {name: "MP3s",    quantity: 3},
    {name: "Videos",  quantity: 2},
    {name: "Guitars", quantity: 8},
    {name: "Tablets", quantity: 5},
    {name: "Laptops", quantity: 7},
    {name: "Apps",    quantity: 3}, 
  ];

  var boughtList = [];

   service.buyItem = function(itemIndex){
      boughtList.push(toBuyList[itemIndex]);
      //$log.log(boughtList);
      toBuyList.splice(itemIndex, 1);
      //$log.log(toBuyList);
   };

   service.getToBuyItems = function(){
     return toBuyList;
   };

   service.getBoughtItems = function(){
    // $log.log("got called : " + boughtList);
     return boughtList;
   };
};

})();