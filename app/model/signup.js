'use strict';
const mongoose = require('./db.js');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: String,
	regNum: String,
	email: String,
	password: String,
	token: String
});
const UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData;