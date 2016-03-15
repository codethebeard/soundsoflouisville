(function(){
	'use strict';

	angular.module("app.home.controller", [])
		.controller('HomeController', HomeController);

	function HomeController(DataService, $scope, $sce, NgMap){

		DataService.getLocations().then(function(response){
			$scope.markers = response;
		});


		DataService.getMeta().then(function(response){
			$scope.meta = response;
		});
		$scope.position = "Louisville, KY";
		$scope.zoom = 14;

		$scope.loadAudio = function(e, m){
			var position = "" + m.street_address + ", " + m.city + ", " + m.state;
			var escaped_position = encodeURIComponent(position).replace(/%20/g, "+");

			DataService.getCoordinates(escaped_position).then(function(response){
				$scope.position = "["+response.lat+","+response.lng+"]";
				$scope.zoom = 19;
			});

			$scope.audioPlayer = $sce.trustAsHtml(m.soundcloud_embed);
		}
	}
})();
