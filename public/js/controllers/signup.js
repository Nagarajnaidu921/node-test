'use strict';
(function(){
	angular.module('myApp')
	.controller('signupCtrl', ['$scope', '$timeout', 'loginMod', newUserCtrl]);
	function newUserCtrl($scope, $timeout, loginMod){
		$scope.regNumPattern = "/[1-9][1-9](au|ae|ag|bm|ce|cp|cs|ee|ei|ec|it|mc|me|ma)[0-9][0-9][0-9]/gm";
		$scope.newUser = {};
		$scope.signup=function(){
			var name = $scope.newUser.name;
			var regNum = $scope.newUser.regNum;
			var email = $scope.newUser.email;
			var password = $scope.newUser.password;
			var rpassword = $scope.newUser.rpassword;
			loginMod.create(name,regNum, email, password, rpassword)
			.then(function(res){
				console.log("ctrl res");
				console.log(res);
				$scope.statusMsg = res.message;
				$scope.isSuccess = res.isSuccess;
				$timeout(function(){$scope.statusMsg ="";}, 6000);
				if (res.isSuccess) {
					$scope.newUser = {}
				}
			})
		}
	}
})();