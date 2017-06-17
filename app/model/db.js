'use strict';
const mongoose = require('mongoose');
const uri = 'mongodb://localhost/authdb';
mongoose.connect(uri, function(err) {
	if (err) {
		return console.error(err);
	}
});
var db = mongoose.connection;
db.on('error', function() {
	console.log('connection failed');
});
db.once('open', function() {
	console.log('Db connection established');
});
module.exports = mongoose;