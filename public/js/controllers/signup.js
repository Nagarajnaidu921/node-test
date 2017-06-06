'use strict';
(function(){
	angular.module('myApp')
	.controller('signupCtrl', ['$scope', '$timeout', 'loginMod', newUserCtrl]);
	function newUserCtrl($scope, $timeout, loginMod){
		$scope.newUser = {};
		$scope.signup=function(){
			var name = $scope.newUser.name;
			var email = $scope.newUser.email;
			var password = $scope.newUser.password;
			var rpassword = $scope.newUser.rpassword;
			loginMod.create(name, email, password, rpassword)
			.then(function(res){
				console.log("ctrl res");
				console.log(res);
			})
		}
	}
})();