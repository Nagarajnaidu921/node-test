'use strict';
const express = require('express');
const router  = express.Router();
router.route('/')

.post(function(req, res){
	console.log(req.body);
	res.send("success");
})
module.exports = router;