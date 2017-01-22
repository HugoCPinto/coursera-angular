(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {


  function checkEmptyDishes(listDishes) {
    var i;
    var emptyDish = false;
    for (i = 0; i < listDishes.length; i++){
      if(listDishes[i] == ""){
        listDishes.splice(i,1);
        emptyDish = true;
      }
    }

    return emptyDish;
  }

  $scope.checkTooMuch = function () {
    var comma = ',';

    $scope.checkEmptyDishesInput = "";

    if($scope.listDishes == null || $scope.listDishes == ""){
      $scope.checkMessage = "Please enter data first";
      $scope.checkTooMuchStyle = {"color":"red"};
      $scope.checkTooMuchBorder = {"border": "1px solid red"};
    }else{
      var listDishes = $scope.listDishes.split(comma);

      if (checkEmptyDishes(listDishes)){
        $scope.checkEmptyDishesInput = "(NOT consider empty dish!)";
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
