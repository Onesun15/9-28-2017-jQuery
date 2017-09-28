'use strict';
/* global $ */
/*

//ADD AN ITEM
Check off 
Delete the item
Form and submit
*/

const form = $('#js-shopping-list-form');
const userInput = 'input[type=text]';

form.submit(event => {
  event.preventDefault();
  let itemSubmitted = $(event.currentTarget).find(userInput).val();
  $('.shopping-list').append(`<li>
    <span class="shopping-item">${itemSubmitted}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
});

//CHECK OFF SHOPPING LIST
//listen for 'check' button
//add (toggle, not append) .shopping-item__checked class to div
const ul = $('.shopping-list'); //<ul> that contains the <li>
const button = '.shopping-item-toggle'; //button: check;
const shoppingListItem = ('.shopping-item'); //span: contains item;

ul.on('click', button, function(event){
  $(event.currentTarget).closest('li').find(shoppingListItem).toggleClass('shopping-item__checked');}
);

// DELETE BUTTON
// Listen for 'delete' button and remove list item

//const ul = $('.shopping-list'); //<ul> that contains the <li>
const buttonDelete = '.shopping-item-delete'; //button: check;
//const shoppingListItem = ('.shopping-item'); //span: contains item;

ul.on('click', buttonDelete, function(event){
  $(event.currentTarget).closest('li').remove('li');}
);

