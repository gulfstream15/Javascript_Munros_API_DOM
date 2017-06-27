// var car = {
  
//   speed: 0,
  
//   accelerate: function() {
//     console.log(this); // car
//     this.speed += 10;
//   },

//   decelerate: function() {
//     this.speed -= 10;
//   }
// };

// car.accelerate();

function Animal(type, legs) {  
  this.type = type;
  this.legs = legs;  
  this.logInfo = function() {
    console.log(this === myCat); // => true
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);  
myCat.logInfo();