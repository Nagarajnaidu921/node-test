'use strict';
const express = require('express');
const router  = express.Router();
router.route('/')

.post(function(req, res){
	console.log(res);
})
module.exports = router;