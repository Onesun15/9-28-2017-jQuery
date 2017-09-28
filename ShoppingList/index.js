'use strict';
/* global $ */
/*
Add an item
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

//function checkItemOff() {
//shopping-item__checked
//listen for 'check' button
//add (toggle, not append) .shopping-item__checked class
$('.shopping-list)').on('click', '.shopping-item-toggle', function(){

}

function deleteItem() {
//remove()
}