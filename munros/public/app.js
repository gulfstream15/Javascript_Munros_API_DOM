var app = function () {

  // Set up the url
  var url = 'https://munroapi.herokuapp.com/api/munros';

  // Set up the response
  var request = new XMLHttpRequest();

  // Tell the request what to do 
  request.open( 'GET', url );

  // Build a list of munro objects
  request.addEventListener( 'load', function () {
  var munroDetails = JSON.parse( request.responseText );
  renderMunroList( munroDetails ); 

  // Retrieve all the heights
  var allMunroHeights = createAllHeights( munroDetails );
  console.log("size of allMunroHeights:", allMunroHeights);

  for (var i=0; i < allMunroHeights.length; i++){
    console.log("height is:", allMunroHeights[i]);
  }

  // Retrieve all the names
  var allMunroNames = createAllNames( munroDetails );
  console.log("size of allMunroNames:", allMunroNames);

  // Create a heights column chart
  new ColumnChart( 'Munro Heights', allMunroHeights, allMunroNames );

  });

  request.send();

};

// List all the munros
var renderMunroList = function ( munroObjects ) {
  var mainDiv = document.getElementById( 'main' );
  var list = document.createElement( 'ul' );

  munroObjects.forEach(function ( munro, index ) {
    if(index > 3) return
    var li = createMunroListItem( munro );
    list.appendChild(li);
  });

  mainDiv.appendChild(list);
};

// Create a munro for the munro list
var createMunroListItem = function ( munroObject ) {
  var li = document.createElement('li');
  li.innerText = munroObject.name;   

  var mapDiv = document.createElement('div');
  mapDiv.className = "map";
  li.appendChild(mapDiv)

  var latitude = munroObject.latlng_lat;
  var longitude = munroObject.latlng_lng;

  // add a map to the list item
  var eachMap = createMap( mapDiv, latitude, longitude );
 
  // return the list as a name and a map for each munro
  return li;
};

var createHeight = function ( munroObject ) {
  var li = document.createElement( 'li' );
  li.innerText = munroObject.height;
  return li;
};

var createLatitude = function ( munroObject ) {
  var li = document.createElement( 'li' );
  li.innerText = munroObject.latlng_lat;
  return li;
};

var createLongitude = function ( munroObject ) {
  var li = document.createElement( 'li' );
  li.innerText = munroObject.latlng_lng;
  return li;
};

var createAllHeights = function( munroObjects ) {
    var allHeights = [];
    munroObjects.forEach(function ( munro, index ) {
      if(index > 3) return
      var eachHeight = munro.height;
      allHeights.push(eachHeight);
  });
  return allHeights;
};

var createAllNames = function( munroObjects ) {
    var allNames = [];
    munroObjects.forEach(function ( munro, index ) {
      if(index > 3) return
      var eachName = munro.name;
      allNames.push(eachName);
  });
  return allNames;
};

var createMap = function ( mapDiv, latitude, longitude ) {

  // console.log("latitude is:", latitude);
  // console.log("longitude is:", longitude);

  var center = { lat: latitude, lng: longitude };
  var zoom = 10;

  var mainMap = new MapWrapper( mapDiv, center, zoom ); 
  mainMap.addMarker( center );

  return mainMap;

};

window.addEventListener( 'load', app );
