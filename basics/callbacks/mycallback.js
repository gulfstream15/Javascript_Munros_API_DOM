// var logRed = function() {
//   console.log("It's red!");
// }

var logRed = function(message) {
  console.log(message);
}

var logNotRed = function() {
  console.log("It's NOT red!");
}

// var redChecker = function(colour, isRed, isNotRed){
//   if(colour === "red"){
//     isRed();
//   }
//   else{
//     isNotRed();
//   }
// }

var redChecker = function(message, colour, isRed, isNotRed){
  if(colour === "red"){
    isRed(message);
  }
  else{
    isNotRed();
  }
}

redChecker("Print out this new message please!", "red", logRed, logNotRed);


// redChecker("red", logRed, logNotRed);
// redChecker("blue", logRed, logNotRed);

// exercise

var myFunctionCaller = function(myCallback, number) {
  return myCallback(number);  
}

var increment = function(number) {
  return (number + 1);
}

var square = function(number) {
  return (number * number);
}

var doSomeMathsForMe = function(callback, n) {
  return callback(n);
}

var myIncrement = doSomeMathsForMe(increment, 10);
console.log("myIncrement is:", myIncrement);

var mySquare = doSomeMathsForMe(square, 10);
console.log("mySquare is:", mySquare);

