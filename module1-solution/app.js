(function (){
  'use strict';
  var x="hello";
  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

   function LunchCheckController ($scope){
    $scope.lunchList = "";

    $scope.checkItemNums = function () {

      var numItems = 0;
      var lunches = $scope.lunchList;
      if (lunches.length > 0){
        var lunchArray = lunches.split(',');
        if (lunchArray.length > 0){
          numItems = lunchArray.length;
        }
      }else{
        $scope.lunchMessage ="Please enter data first";
      }

      if (numItems > 0 ){
        if(numItems <=3){
           $scope.lunchMessage = "Enjoy!";
        }else{
           $scope.lunchMessage = "Too much!";
         }
       }
      }
  };

})();
