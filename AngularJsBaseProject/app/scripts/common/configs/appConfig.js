/*global myApp */
myApp.config(['$routeProvider', function ($routeProvider) {

	'use strict';

	$routeProvider
		.when('/', {
			templateUrl: '/app/scripts/home/templates/homePage.html',
			controller: 'HomeController'
		})
		.when('/app/views/index.html', {
			redirectTo: '/'
		});


}]);