'use strict';


const store = (function () {

  const foot = 'bar';  
  const items = [];

  const hideCheckedItems = false;
  const searchTerm = '';
  
  const findById = function(id) {
    return items.find(item => item.id === id);
  };

  const addItem = function(item) {
    this.items.push(item);
  };

  const findAndUpdate = function (id, newData) {
    const findItem = this.items.find(item => item.id === id);
    const updateData = Object.assign(findItem,newData);
    api.updateItem(id,updateData, () => {
      console.log('updated!');
    });
  };

  const findAndDelete = function(id) {
    this.items = this.items.filter(object => object.id !== id);
  };


  const toggleCheckedFilter= function(){

    this.hideCheckedItems = !this.hideCheckedItems;    
  }

  const setSearchTerm = function(newSearchTerm){
    this.searchTerm = newSearchTerm;
  }




  return{
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm,
    findAndUpdate
  };

}() );