'use strict';
const mongoose = require('./db.js');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: {type: String, required: true},
	regNum: {type: String, required: true},
	email: {type: String, required: true},
	password: {type: String, required: true},
	token: {type: String, required: true},
});
const UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData;