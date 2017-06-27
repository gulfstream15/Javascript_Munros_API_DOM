var app = function(){
  var url = 'https://restcountries.eu/rest/v2';
  var request = new XMLHttpRequest();
  //set the type of request we want with the url we want to call
  request.open("GET", url);
  //set the callback we want it to use when it has completed the call
  request.addEventListener('load', function(){
    if(request.status !== 200) return;
    var jsonString = request.responseText;
    console.log(jsonString);
    var countries = JSON.parse(jsonString);
    // The first country in the list (Afghanistan)
    var country = countries[0];
    console.log("countries[0]", countries[0]);
    populateList(countries); //CHANGED;
  });
  //send the request!
  request.send();
}

var populateList = function(countries){
	// we now build up the HTML to include
	// all countries and in this case we
	// retrieve the country names
	// pass all the country objects in 
	// ul in HTML is an unordered bulleted list
	// get the element id defined in index.html
  var ul = document.getElementById('country-list');

  countries.forEach(function(country){
  	// define a list item
    var li = document.createElement('li');
    // add the country name to that list item
    li.innerText = country.name;
    // make a list within the ul for each country
    ul.appendChild(li);
  });
}

window.addEventListener('load', app);

// // -------- REFACTORED CODE -----------------

// var app = function(){
//   var url = 'https://restcountries.eu/rest/v2';
//   makeRequest(url, handleData);
// }

// var handleData = function(){
//   if(this.status !== 200) return;
//   var jsonString = this.responseText;
//   console.log(jsonString);
//   var countries = JSON.parse(jsonString);
//   var country = countries[0];
//   populateList(countries);
// }

// var makeRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   //set the type of request we want with the url we want to call
//   request.open("GET", url);
//   //set the callback we want it to use when it has completed the call
//   request.addEventListener('load', callback);
//   //send the request!
//   request.send();

// }

// var populateList = function(countries){
//   var ul = document.getElementById('country-list');

//   countries.forEach(function(country){
//     var li = document.createElement('li');
//     li.innerText = country.name;
//     ul.appendChild(li);
//   });
// }

// window.addEventListener('load', app);