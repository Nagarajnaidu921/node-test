'use strict';
const express = require('express');
const router  = express.Router();
const bcrypt = require('bcrypt');
router.route('/')

.post(function(req, res){
	console.log(req.body);
	var userData = {
		name: req.body.name,
		regNum: req.body.regNum,
		email: req.body.email
	}
	bcrypt.hash(req.body.password, 10, function(err, hash) {
		console.log(hash);
		userData.password = hash;//error : can't able to assign the hash to userData.password
	});
	console.log(pwd_hash);;
	let resData = { msg: 'error', isSuccess:true }
	res.json(resData);
})
module.exports = router;