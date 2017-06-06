'use strict';
(function() {
	angular.module('myApp', ['ngRoute'])
	.config(['$routeProvider',config])
	function config($routeProvider){
		$routeProvider
		.when('/login', {
			templateUrl: '../partials/login.html'
		})
		.when('/signup', {
			templateUrl: '../partials/signup.html'
		})
		.otherwise('/login')
	}
})();