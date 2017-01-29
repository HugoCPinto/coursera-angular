(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


// Controller List to buy
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

  var toBuyList = this;

  toBuyList.items = ShoppingListCheckOffService.getListToBuy();

  toBuyList.removeItem = function(itemIndex) {
    ShoppingListCheckOffService.remove(itemIndex);
  }

  toBuyList.addItemToBoughtList = function(itemName, itemQuantity) {
    ShoppingListCheckOffService.addItem(itemName, itemQuantity);
  }

}

// Controller List bought
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

  var listBought = this;

  listBought.items = ShoppingListCheckOffService.getListBought();

}

//service
function ShoppingListCheckOffService() {

  var service = this;

  //list to buy
  var listToBuy = [
    {
      itemName: "Milk",
      itemQuantity: "2"
    },
    {
      itemName: "Donuts",
      itemQuantity: "200"
    },
    {
      itemName: "Cookies",
      itemQuantity: "300"
    },
    {
      itemName: "Chocolate",
      itemQuantity: "5"
    },
    {
      itemName: "Banana",
      itemQuantity: "5"
    }
  ];

  //list bought
  var listBought = [];


  service.addItem = function (itemName, itemQuantity) {

    var item = {
      itemName : itemName,
      itemQuantity : itemQuantity
    };

    listBought.push(item);

  }

  service.remove = function(itemIndex) {
    listToBuy.splice(itemIndex, 1);
  }

  service.getListToBuy = function() {
    return listToBuy;
  }

  service.getListBought = function() {
    return listBought;
  }

}

})();
