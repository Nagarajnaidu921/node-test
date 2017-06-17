'use strict';
(function(){
	angular.module('myApp')
	.factory('loginMod', ['$http', '$window', Signup]);
	function Signup($http, $window) {
		function genObjForNotFy(msg, isSuccess) {
			var ObjForNotFy = {
				message: msg,
				isSuccess: isSuccess
			}
			if (isSuccess) {
				ObjForNotFy.colorClass = 'success';
				return ObjForNotFy;
			}
			else {
				ObjForNotFy.colorClass = 'error';
				return ObjForNotFy;
			}
		}
		function create(name,regNum, email, password, rpassword) {

			if(regNum && name && email && password && rpassword) {
				console.log(name,email,password,rpassword);
				var isPasswordSame = (password == rpassword);
				var isPasswordStrong = password.length >= 8;
				if(!isPasswordStrong) {
					return genObjForNotFy("password is too short", false);//this is not showing the eroor msg if password is short
				}else {
				if(isPasswordSame && isPasswordStrong) {
					var user = {
						name: name,
						regNum: regNum,
						email: email,
						password: password
					}
					console.log(user);
					return $http.post('/loginmod/signup', user)
					.then(function(res){
						console.log("myfac");
						console.log(res.data);
						return genObjForNotFy(res.data.msg , res.data.isSuccess);
					})
				}
			}

			}

			
		}
		return {
			create:create
		}
	}
})();