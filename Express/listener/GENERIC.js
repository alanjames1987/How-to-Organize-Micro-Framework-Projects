var mongoose = require('mongoose');

var GenericModel = mongoose.model('GENERIC');

var listener = {};

listener.create = function(socket, data) {};

listener.read = function(socket, data) {};

listener.readOne = function(socket, data) {};

listener.update = function(socket, data) {};

listener.delete = function(socket, data) {};

module.exports = listener;