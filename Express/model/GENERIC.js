var uuid = require('node-uuid');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var schema = new Schema({
	'id': {
		'type': String,
		'default': function() {
			return uuid.v4();
		}
	},
	'created': {
		'type': Date,
		'default': new Date()
	},
	'updated': Date
}, {
	'collection': 'GENERIC',
	'versionKey': false
});

schema.pre('save', function(next) {

	this.updated = new Date();

	next();

});

mongoose.model('GENERIC', schema);