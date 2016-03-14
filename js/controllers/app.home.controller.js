(function(){
	'use strict';

	angular.module("app.home.controller", [])
		.controller('HomeController', HomeController);

	function HomeController(DataService, $scope, $sce){

		DataService.getLocations().then(function(response){
			$scope.markers = response;
		});


		DataService.getMeta().then(function(response){
			$scope.meta = response;
		});

		$scope.loadAudio = function(e, m){
			$scope.audioPlayer = $sce.trustAsHtml(m.soundcloud_embed);
		}
	}
})();
