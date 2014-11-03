angular.module('F1StatsApp.services', []).factory('ergastAPIservice', function($http) {
	var ergastAPI = {};
	ergastAPI.getDrivers = function(year) {
		return $http({
			method: 'JSONP',
			url: 'http://ergast.com/api/f1/' + year + '/driverStandings.json?callback=JSON_CALLBACK'
		});
	}
	return ergastAPI;
});