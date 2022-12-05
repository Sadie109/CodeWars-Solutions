// Training JS #4: Basic data types--Array

function getLength(arr) {
  return arr.length;
}
function getFirst(arr) {
  //return the first element of arr
  return arr[0];
}
function getLast(arr) {
  //return the last element of arr
  return arr[arr.length - 1];
}
function pushElement(arr) {
  var el = 1;
  //push el to arr
  arr.push(el);
  return arr;
}
function popElement(arr) {
  //pop an element from arr
  arr.pop();
  return arr;
}

// ----------------------------------------------------
//   Square(n) Sum

function squareSum(numbers) {
  let sum = 0;

  numbers.forEach((num, index) => {
    sum = sum + num * num;
    console.log(num * num);
  });
  return sum;
}

// create variable 0
// foreach through array
// square each number (multiply by itself)
// add together
// return results

// ------------------------------------------------------

// Grasshopper - Function syntax debugging

// Before
// function main [verb, noun]
//   return verb + noun
// }

// After
function main(verb, noun) {
  return verb + noun;
}

// ------------------------------------------------------

// Grasshopper - If/else syntax debug

function checkAlive(health) {
  console.log(health);
  if (health <= 0) {
    return false;
  } else {
    return true;
  }
}

// ------------------------------------------------------

//   Counting sheep...

function countSheeps(arrayOfSheep) {
  //   console.log(arrayOfSheep)
  let trueSheep = 0;
  arrayOfSheep.forEach((sheep) => {
    if (sheep) {
      trueSheep = trueSheep + 1;
    }
  });
  return trueSheep;
  console.log(trueSheep);
}

// create variable to count true sheep
// forEach to loop through array
// if statement to find true sheep
// true sheep into new variable
// return all true sheep in array

// ------------------------------------------------------

// Find the smallest integer in the array

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

// ------------------------------------------------------

// Century From Year

function century(year) {
  return Math.ceil(year / 100); //using ceiling method to round up to nearest century (100)
}

// ------------------------------------------------------

// Is n divisible by x and y?

function isDivisible(n, x, y) {
  if (n % x == 0 && n % y == 0) {
    return true;
  }
  return false;
}

// use if statement to check if n could be divisible by x and divisible by y
// return appropriate answer ie. true/false

// ------------------------------------------------------------

// Abbreviate a Two Word Name

// first attempt at the solution, worked for first name but not second
function abbrevName(name) {
  let first = name.slice(0, 1);
  let last = name.slice(4, 5);
  let result = first + "." + last;
  return result;

  console.log(result);
}

// take the first letter of the first and last name:
// slice the string
// put the first initial and last initial together
// add a space inbetween first and last initial

function abbrevName(name) {
  let nameO = name.split(" ");
  return (
    nameO[0].charAt(0).toUpperCase() + "." + nameO[1].charAt(0).toUpperCase()
  );
}

// Basic Mathematical Operations

const basicOp = (operation, value1, value2) =>
  operation == "+"
    ? value1 + value2
    : operation == "-"
    ? value1 - value2
    : operation == "*"
    ? value1 * value2
    : value1 / value2;



    // Keep Hydrated

function litres(time) {
  return Math.floor(time * 0.5);
}

// take time variable and times it by 0.5
// want to take the outcome and round down to smallest value using Math.floor()
