'use strict';
const express  = require('express');
var jwt        = require("jsonwebtoken");
const User     = require('../model/signup.js');
const router   = express.Router();
const bcrypt   = require('bcrypt');
router.route('/signup')

.post(function(req, res) {
	User.findOne({regNum: req.body.regNum}, function(err, data) {
		if (err) {
			res.json({
				msg: "Error occured" + err,
				isSuccess: false,
				type: false 
			});
		} else {
			if(data) {
				res.json({
					msg: "This Register number is already associated with another account",
					isSuccess: false,
					type: false
				});
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
							res.json({
								msg: err,
								isSuccess: false,
								type: false
							});
						} else {
							res.json({
								msg: "data successfully registered",
								isSuccess: true,
								type: true
							});
						}
					});
				});
			}

		}
	});
	
	// console.log(pwd_hash);
	
})
module.exports = router;