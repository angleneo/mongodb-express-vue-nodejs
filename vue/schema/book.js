var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var bookSchema = new Schema({
	name: String,
	author: String,
	age: Number
})

module.exports = mongoose.model('Book',bookSchema);