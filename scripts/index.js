/* global shoppingList, cuid, store, api*/
'use strict';

// eslint-disable-next-line no-unused-vars

console.log(store.items);


$(document).ready(function () {
  shoppingList.bindEventListeners();

  api.getItems((items) => {

    items.forEach((item) => store.addItem(item));
  });

  shoppingList.render();
});



