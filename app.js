(function(){
  'use strict';

  angular.module('ShoppingListApp', [])
  .controller('ShoppingListAddController', ShoppingListAddController)
  .controller('ShoppingListShowController', ShoppingListShowController)
  .service('ShoppingListService', ShoppingListService);

  ShoppingListAddController.$inject = ['ShoppingListService'];
  function ShoppingListAddController(ShoppingListService) {
    var itemAdder = this;
    itemAdder.itemName ="";
    itemAdder.quantity ="";

    // consuming call to service to add item method
    itemAdder.addItem = function () {
      ShoppingListService.addItem(itemAdder.itemName, itemAdder.quantity);
      itemAdder.itemName = "";
      itemAdder.quantity = "";
    }
  }

  ShoppingListShowController.$inject = ['ShoppingListService'];
  function ShoppingListShowController(ShoppingListService) {
    var showList = this;

    // consuming call to service to get items method
    showList.items = ShoppingListService.getItems();

    // consuming call to service remove method
    showList.removeItem = function (itemIndex) {
      ShoppingListService.removeItem(itemIndex);
    }
  };

  // Service implementation
  function ShoppingListService() {
      var service = this;

      // List of shopping items
      var items = [];

      // Servie method for adding item
      service.addItem = function (itemName, quantity) {
        console.log('inside additem');
        var item = {
          name: itemName,
          quantity: quantity
        };
        items.push(item);
      }

      // Servie method to remove items from list
      service.removeItem = function (itemIndex) {
        console.log('inside removeitem: ', itemIndex);
        items.splice(itemIndex);
      }

      // Servie method to get items
      service.getItems = function () {
        console.log('inside getitems: ', items);
        return items;
      };
  }

})();
