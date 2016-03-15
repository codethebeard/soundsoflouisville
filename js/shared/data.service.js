(function(){
	'use strict';

	angular.module("app.data.service", [])
		.service('DataService', function($http, $q){

			var getData = function(){
				return $http.get('js/shared/data.json')
					.then(function(response){
						return response;
					});
			};

			var getMeta = function(){
				return getData().then(function(response){
					return response.data.meta;
				});
			};

			var getLocations = function(){
				return getData().then(function(response){
					return response.data.data;
				});
			};

			var getLocationSound = function(title){
				getData().then(function(response){
					console.log(response.data.data);
				});
			}

			var getCoordinates = function(address){
				return $http.get('http://maps.google.com/maps/api/geocode/json?address='+ address +'&sensor=false').then(function(response){
					return response.data.results[0].geometry.location;
				});
			}

			return {
				getData: getData,
				getMeta: getMeta,
				getLocations: getLocations,
				getLocationSound: getLocationSound,
				getCoordinates: getCoordinates
			};

		});
})();
