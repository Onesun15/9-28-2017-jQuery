'use strict';
/* global $ */
// FizzBuzz

/*
Need a function to determine string fizz, buzz, fizzbuzz or number upto positive integer
Send output to an array simialar to first version of FizzBuzz drill
Insert array elements into .js-result 

Create an array with each value.


*/

const result = $('.js-result');

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

const call = countToArray(16);

console.log(call);

function 





