(function () {

  angular.module('public')
  .controller('SignUpController', SignUpController);

  SignUpController.$inject = ['MenuService'];
  function SignUpController(MenuService) {
    var reg = this;

    reg.submit = function () {
      MenuService.getFavoriteDish(reg.user.dishNumber).then(function (response) {
        reg.user.favDish = response.data;
        MenuService.setUserProfile(reg.user);
        reg.success = true;
        reg.error = false;

      }, function (response) {
        reg.success = false;
        reg.error = true;
      });
    };

    reg.validateFavorite = function() {
      MenuService.getFavoriteDish(reg.user.dishNumber).then(function (response) {
        reg.success = true;
        reg.error = false;

      }, function (response) {
        reg.success = false;
        reg.error = true;
      });
    };

  }

})();
