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

			this.getMeta = function(){
				return getData().then(function(response){
					return response.data.meta;
				});
			};

			this.getLocations = function(){
				return getData().then(function(response){
					return response.data.data;
				});
			};

			this.getCoordinates = function(address){
				return $http.get('http://maps.google.com/maps/api/geocode/json?address='+ address +'&sensor=false').then(function(response){
					return response.data.results[0].geometry.location;
				});
			}

		});
})();
