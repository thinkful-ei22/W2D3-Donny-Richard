'use strict';


const api = (function(){

  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/donny';

  const getItems = function (callback){

    $.getJSON(`${BASE_URL}/items`,callback);


  };

  const updateItem = function (id,updateData,callback) {
    $.ajax({
      url: `${BASE_URL}/items/${id}`,
      method: 'PATCH',
      contentType: 'application/json',
      data: JSON.stringify(updateData),
      success: callback
    });

  };

  const createItem = function (name,callback){

    let newItem= {
      name: name
    };

    newItem = JSON.stringify(newItem);


    $.ajax({
      url: `${BASE_URL}/items`,
      method: 'POST',
      dataType: 'json',
      contentType: 'application/json',
      data: newItem,
      success: callback
    });

  };



  return{

    getItems,
    createItem,
    updateItem
  };



}());