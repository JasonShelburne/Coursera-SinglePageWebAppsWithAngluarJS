(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.responseMsg = "";

    signUpCtrl.submit = function() {
       MenuService.getFavoriteDish(signUpCtrl.user.favoriteDish)
       .then(
         function (response) {
            signUpCtrl.user.favoriteDish = response.data;
            MenuService.setUserProfile(signUpCtrl.user);
            signUpCtrl.responseMsg = "Your information has been saved.";
          },
           function(reason) {
              signUpCtrl.responseMsg = "No such menu number exists.";
          }
       );
    };
};

})();
