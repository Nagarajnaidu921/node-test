'use strict';
const express  = require('express');
var jwt        = require("jsonwebtoken");
const User     = require('../model/signup.js');
const router   = express.Router();
const bcrypt   = require('bcrypt');
function resGenerator(message, isSuccess) {
	const resData = {
		msg: message,
		isSuccess: isSuccess
	}
	return reData;
}
router.route('/signup')

.post(function(req, res) {
	var resData = {};
	User.findOne({regNum: req.body.regNum}, function(err, data) {
		if (err) {
			resData = resGenerator("Error occured" + err, false);
			res.json(resData);
		} else {
			if(data) {
				resData = resGenerator("This Register number is already associated with another account", false);
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
							resData = resGenerator(err, false);
							res.json(resData);
						} else {
							resData = resGenerator("successfully registered", true);
							res.json(resData);
						}
					});
				});
			}
		}
	});
	
	// console.log(pwd_hash);
	
})
module.exports = router;