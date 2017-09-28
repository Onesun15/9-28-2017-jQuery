'use strict';
/* global $ */
// FizzBuzz

/*
Need a function to determine string fizz, buzz, fizzbuzz or number upto positive integer
Send output to an array simialar to first version of FizzBuzz drill
Insert array elements into .js-result 

Create an array with each value.


*/

const result = $('.js-results');

function countToArray(num) {
  const output = [];
  //use loop to count and test on if statements
  for (let i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      output.push('fizzbuzz');
    } else if (i % 5 === 0) {
      output.push('buzz');
    } else if (i % 3 === 0) {
      output.push('fizz');
    } else {
      output.push(i);
    }
  }
  return output; 
}

function appendValue(num){
  let makeArray = countToArray(num);
  for(let i=0; i<makeArray.length; i++){
    let currentValue = makeArray[i];
    let fizzBuzzClass;
    if(currentValue === 'fizzbuzz') {
      fizzBuzzClass = 'fizzbuzz';
    } if (currentValue === 'fizz') {
      fizzBuzzClass = 'fizz';
    } if (currentValue === 'buzz') {
      fizzBuzzClass = 'buzz';
    }
    console.log(currentValue);
    result.append(`<div class="fizz-buzz-item ${fizzBuzzClass}"<span>${currentValue}</span></div>`);
  }
}

//Listen for User Input of Number
$(function(){
  $('#number-chooser').submit(function(event){
    event.preventDefault();
    let num = $(this).find('input[type=number]').val();
    appendValue(num);
  });
});


//call our function and loop through the output array
//grab result and push to X
//Insert user input > 'num'



// const call = countToArray(16);
// console.log(call);
