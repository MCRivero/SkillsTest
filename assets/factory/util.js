(function () {
    'use strict';

    angular.module('fourSquare')
	.factory('Util', function($http) {
		return {
			getLocationList: function(params) {
				return $http.get("https://api.foursquare.com/v2/venues/explore?near=" + params + "&oauth_token=VWMIPA4ULOVTMWAXMCRNPMWFNBY5AYWC0REPMMHVTCWWDSNS&v=20170131")
			}
		}
	});
})();