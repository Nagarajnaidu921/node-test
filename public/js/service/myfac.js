'use strict';
(function(){
	angular.module('myApp')
	.factory('loginMod', ['$http', '$window', Signup]);
	function Signup($http, $window) {
		function create(name, email, password, rpassword) {
			

			if((name && email) && (password && rpassword)) {
				console.log(name,email,password,rpassword);
				var isPasswordSame = (password == rpassword);
				var isPasswordStrong = password.length >= 8;
				console.log(isPasswordStrong);
				if(isPasswordSame && isPasswordStrong) {
					var user = {
						name: name,
						email: email,
						password: password
					}
					console.log(user);
					return $http.post('/signup/user', user)
					.then(function(res){
						console.log("myfac");
						console.log(res.data);
						return res.data;
					})
				}

			}

			
		}
		return {
			create:create
		}
	}
})();