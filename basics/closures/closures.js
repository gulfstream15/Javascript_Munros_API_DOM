var setupAddFunction = function (modifier) { // UPDATED
    var counter = 0;
    
    return function () { 
        counter += modifier; // UPDATED
        console.log(counter);
    }
}

var addFive = setupAddFunction(5); // UPDATED

addFive();
addFive();
addFive();

var addTen = setupAddFunction(10);

addTen();
addTen();
addTen();