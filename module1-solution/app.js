(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {


  function checkEmptyDishes(listDishes) {
    var i;
    for (i = 0; i < listDishes.length; i++){
      if(listDishes[i] == ""){
        return true;
      }
    }
    return false;
  }

  $scope.checkTooMuch = function () {
    var comma = ',';

    if($scope.listDishes == null || $scope.listDishes == ""){
      $scope.checkMessage = "Please enter data first";
      $scope.checkTooMuchStyle = {"color":"red"};
      $scope.checkTooMuchBorder = {"border": "1px solid red"};
    }else{
      var listDishes = $scope.listDishes.split(comma);

      if (checkEmptyDishes(listDishes)){
        $scope.checkEmptyDishesInput = "NOT consider empty item!";
      }else{
        $scope.checkEmptyDishesInput = "";
      }

      if (listDishes.length <= 3) {
        $scope.checkMessage = "Enjoy!";
      }else{
        $scope.checkMessage = "Too much!"
      }
      $scope.checkTooMuchStyle = {"color":"green"};
      $scope.checkTooMuchBorder = {"border":"1px solid green"};
    }
  }
}

})();
