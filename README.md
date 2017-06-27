# Javascript_Munros_API_DOM

A Javascript application showing Scottish Munros using google maps and highchart API's.
This application manipulates the DOM using event listeners and makes a HTTP request to 
retrieve data and use it to display information. The application lists Scottish munros 
together with the location for each map using Google maps. The munro latitude and longitude 
are retrieved from the munro API and this is fed into a MapWrapper to create the map for 
that particular munro. In addition, all the munro heights are formed into a list and this
is used by the the highchart column chart API to produce a chart showing the variation of 
munro heights in metres.
