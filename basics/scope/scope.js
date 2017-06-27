var globalVariable = 99;

var separateFunction = function() {
  var separateA = 2;
};

var outerFunction = function() {
  var outerA = 1;
  var innerFunction = function() {
    console.log('outerA ', outerA);
    console.log('globalVariable', globalVariable)
    // console.log('separateA ', separateA);
  };

  innerFunction()
};

outerFunction();