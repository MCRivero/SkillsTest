(function(){

	'use strict';
	 
	angular.module('fourSquare', [])
	
	.controller('ApiLoadCtrl', function($scope, $http, Util){
		var result;
		
		$scope.loadLocations = function (params) {
			Util.getLocationList(params)
			.then(function succes(response) {
				$scope.showAlert = false;
				$scope.result = response;
			}, function error(response) {
				$scope.showAlert = true;
				$scope.error = 'It seems the location is invalid or not in our database.';
			});
		}
		
		$scope.loadLocations.enterKey = function (keyEvent, params) {
			if (keyEvent.which === 13){
				Util.getLocationList(params)
				.then(function succes(response) {
					$scope.showAlert = false;
					$scope.result = response;
				}, function error(response) {
					$scope.showAlert = true;
					$scope.error = 'It seems the location is invalid or not in our database.';
				});
			}
		}
			
	})
	
	.factory('Util', function($http) {
		return {
			getLocationList: function(params) {
				return $http.get("https://api.foursquare.com/v2/venues/explore?near=" + params + "&oauth_token=VWMIPA4ULOVTMWAXMCRNPMWFNBY5AYWC0REPMMHVTCWWDSNS&v=20170131")
			}
		}
	});
}());

	