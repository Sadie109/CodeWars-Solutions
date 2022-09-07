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


// Grasshopper - If/else syntax debug

  function checkAlive (health) {
    console.log (health);
    if (health <= 0) {
      return false
    } 
    else {
      return true
    }
    
  }


//   Counting sheep...
  
  function countSheeps(arrayOfSheep) {
    //   console.log(arrayOfSheep)
      let trueSheep = 0
      arrayOfSheep.forEach(sheep => {
        if (sheep) {
           trueSheep = trueSheep +1;
          }
      })
      return trueSheep;
      console.log(trueSheep)
    }
    
    // create variable to count true sheep 
    // forEach to loop through array
    // if statement to find true sheep
    // true sheep into new variable
    // return all true sheep in array