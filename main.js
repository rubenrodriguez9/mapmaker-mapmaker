/******************
 * YOUR CODE HERE *
******************/
const doubleAll = function(arr){
  let result = [];
  for(let i = 0; i < arr.length; i++){
    result.push(arr[i] * 2)
  }
  return result
}

const yelledGreetings = function(arr){
  result = [];
  for(let i = 0;i < arr.length; i++){
    result.push(arr[i] + '!')
  }
  return result
}

const absoluteValues = function(arr){
  result = [];
  for(let i = 0;i < arr.length; i++){
    if(arr[i] >= 0){
      result.push(arr[i])
    }else if(arr[i] < 0){
      result.push(arr[i] * -1)
    }
  }
  return result
}

const upperCaseFirstLetters = function(arr){
  result = [];
  for(let i = 0;i < arr.length; i++){
    result.push(arr[i].charAt(0).toUpperCase()+ arr[i].toLowerCase().slice(1,))
  }
  return result
}

let changeToInitials = function(arr){
  result = [];
  for(let i = 0;i < arr.length; i++){
  let fullName = arr[i];
  let firstInital = fullName[0];
  let indexOfSecondInitial = fullName.indexOf(' ')+1
  let secondInitial = fullName[indexOfSecondInitial]
  let initals = firstInital + secondInitial;
  result.push(initals.toUpperCase())
    
      
    }
    // arr[i].charAt(0).toUpperCase() + 
    // result.push(arr[i][arr[i].indexOf(' ')+1])
   
    
  return result
}


let doubleOdd = function(arr){
  let result = []
  for(let i = 0;i < arr.length; i++){
    if(arr[i] % 2 === 1){
      result.push(arr[i] * 2)
    }else if(arr[i] % 2 === -1){
      result.push(arr[i] * 2)
    }else result.push(arr[i])
  }
  return result
}

let add1ToLeft = function(arr){
  let result = [];
  for(let i = 0;i < arr.length; i++){
    let secondChar = arr[i]
    let firstChar =arr[i].push(1);
    
  }
  return result

}


/*******************************************
* CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
*           PLEASE DON'T TOUCH!            *
*******************************************/

if (typeof doubleAll === 'undefined') {
  doubleAll = undefined;
}

if (typeof yelledGreetings === 'undefined') {
  yelledGreetings = undefined;
}

if (typeof absoluteValues === 'undefined') {
  absoluteValues = undefined;
}

if (typeof upperCaseFirstLetters === 'undefined') {
  upperCaseFirstLetters = undefined;
}

if (typeof changeToInitials === 'undefined') {
  changeToInitials = undefined;
}

if (typeof doubleOdd === 'undefined') {
  doubleOdd = undefined;
}

if (typeof add1ToLeft === 'undefined') {
  add1ToLeft = undefined;
}


module.exports = {
  doubleAll,
  yelledGreetings,
  absoluteValues,
  upperCaseFirstLetters,
  changeToInitials,
  doubleOdd,
  add1ToLeft,
}
