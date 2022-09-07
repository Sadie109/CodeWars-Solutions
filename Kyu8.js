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




// Grasshopper - Function syntax debugging

// Before
// function main [verb, noun]
//   return verb + noun
// }

// After
function main (verb, noun) {
    return verb + noun
  }