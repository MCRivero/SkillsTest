- This app consists of:

1) index.html: it shows a search box where the user can type in a location and when the magnifying glass is clicked an AngularJS directive call 
   to foursquare.com which is made to retrieve popular and recommeded venues around the given location.

2) js/app.js: it actually executes the method loadLocations() with the parameter and execute the $http.get to get popular and recommended venues around the specified location.

3) css/styles.css: custom styles for index page.

- To use this app just double click on index.html, enter a location name (for example a city name) in the search box and click on 
  the magbnifying glass. 

  If the location exists in foursquare you'll get a list of venues for the given location. Otherwise you will get an error massage.

- Both the list of venues and the error message are showing beneath the searchbox.  



 
