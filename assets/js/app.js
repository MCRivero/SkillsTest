(function(){

	var app = angular.module('fourSquare', []);
	
	app.controller('ApiLoadCtrl', function($scope, $http){
		var result;
		
		$scope.loadLocations = function (params) {

			$http.get("https://api.foursquare.com/v2/venues/explore?near=" + params + "&oauth_token=VWMIPA4ULOVTMWAXMCRNPMWFNBY5AYWC0REPMMHVTCWWDSNS&v=20170131")
			.then(function succes(response) {
				$scope.showAlert = false;
				$scope.result = response;
			}, function error(response) {
				$scope.showAlert = true;
				$scope.error = 'It seems the location is invalid or not in our database.';
			});
		}
	});
}());

	