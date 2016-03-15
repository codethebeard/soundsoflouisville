(function(){
	'use strict';

	angular.module("app.home.controller", [])
		.controller('HomeController', HomeController);

	function HomeController(DataService, $scope, $sce, NgMap, Analytics ){

		DataService.getLocations().then(function(response){
			$scope.markers = response;
		});

		DataService.getMeta().then(function(response){
			$scope.meta = response;
		});

		$scope.position = "Louisville, KY";
		$scope.zoom = 14;

		$scope.loadAudio = function(e, m){
			Analytics.trackEvent('audio', 'play', m.title);

			$scope.position = "["+m.lat+","+m.lng+"]";
			$scope.zoom = 19;

			$scope.audioPlayer = $sce.trustAsHtml(m.soundcloud_embed);
		}
	}
})();
