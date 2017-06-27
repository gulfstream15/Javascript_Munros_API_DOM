// var numbers = [1, 2, 3, 4, 5];
// for (var number of numbers) {
//   console.log('the number is:', number);
// }

// var mynumbers = [1, 2, 3, 4, 5];

// mynumbers.forEach(function (number) {
//     console.log('the number is:', number);
// });

var ourForEach = function (array, callbackForItem) {
  for (var item of array) {
    callbackForItem(item);
  }
};

var numbers = [1, 2, 3, 4, 5];

ourForEach(numbers, function (number) {
  console.log('the number is:', number);
});