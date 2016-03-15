(function(){

	'use strict';

	/**
	 * Main Application
	 * @see https://github.com/revolunet/angular-google-analytics
	 */
	angular.module("app", [
		'app.data.service',
		'app.home.controller',
		'ngMap',
		'angular-google-analytics'
	])
	.config(function(AnalyticsProvider){
		AnalyticsProvider.setAccount('UA-47262665-7');
  		AnalyticsProvider.trackPages(true);
	})
	.run(function(Analytics){});
})();
