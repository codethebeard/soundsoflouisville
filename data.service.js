(function(){
	'use strict';

	angular.module("app.data.service", [])
		.service('DataService', function($http, $q){

			var getData = function(){
				return $http.get('data.json')
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

			return {
				getData: getData,
				getMeta: getMeta,
				getLocations: getLocations
			};
			
		});
})();
