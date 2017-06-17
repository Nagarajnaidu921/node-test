'use strict';
const express  = require('express');
var jwt        = require("jsonwebtoken");
const User     = require('../model/signup.js');
const router   = express.Router();
const bcrypt   = require('bcrypt');
function resGen(message, isSuccess) {
	var resData = {
		msg: message,
		isSuccess: isSuccess
	};
	return resData;
}
router.route('/signup')
.post(function(req, res) {
	User.findOne({regNum: req.body.regNum}, function(err, data) {
		var resData = {};
		if (err) {
			resData = resGen(("Error coocured" + err), false);
			res.json(resData);
		} else {
			if(data) {
				resData = resGen("This Register number is already exist", false);
				res.json(resData);
			} else {
				bcrypt.hash(req.body.password, 10, function(err, hash) {
					console.log(req.body);
					var userData = {
						name: req.body.name,
						regNum: req.body.regNum,
						email: req.body.email
					}
					userData.password = hash;
					userData.token = jwt.sign({ foo: 'bar', iat: Math.floor(Date.now() / 1000) - 30 }, 'shhhhh');
					console.log(userData);
					var NewUserModel = new User(userData);
					NewUserModel.save(function(err){
						if(err) {
							resData = resGen(err, false);
							res.json(resData);
						} else {
							resData = resGen("data successfully registered", true);
							res.json(resData);
						}
					});
				});
			}
		}
	});
})
module.exports = router;