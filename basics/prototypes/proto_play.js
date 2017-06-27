var Fish = function(name, color) {
  this.name = name;
  this.color = color;
};

Fish.prototype = {
  swim: function() {
    console.log('splash');
  }
};

var myFish = new Fish('nemo', 'orange');
myFish.swim();