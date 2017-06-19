'use strict';
const mongoose = require('./db.js');
validators = require('mongoose-validators');
const Schema = mongoose.Schema;
const UserSchema = new Schema({
	name: String,
	regNum: {type: String, validate: validators.matches('/[1-9][1-9](au|ae|ag|bm|ce|cp|cs|ee|ei|ec|it|mc|me|ma)[0-9][0-9][0-9]/gm') },
	email: String,
	password: String,
	token: String
});
const UserData = mongoose.model('UserData', UserSchema);
module.exports = UserData;