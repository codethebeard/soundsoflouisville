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

			return {
				getData: getData,
				getMeta: getMeta,
				getLocations: getLocations,
				getLocationSound: getLocationSound
			};

		});
})();
