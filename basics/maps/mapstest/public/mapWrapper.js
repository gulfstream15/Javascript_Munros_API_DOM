var MapWrapper = function() {
  var container = document.getElementById('main-map'); 
  this.googleMap = new google.maps.Map(container, {
    center: {lat: 40.712784, lng: -74.005941}, //NEW - WATCH SPELLING
    zoom: 10 //NEW
  });
}