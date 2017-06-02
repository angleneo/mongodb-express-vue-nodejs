var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
	username: String,
	password: String,
	login: String
},{collection:'login'})

module.exports = mongoose.model('Users',userSchema); 