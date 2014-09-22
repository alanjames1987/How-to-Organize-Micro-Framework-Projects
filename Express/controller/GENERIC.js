var mongoose = require('mongoose');

var genericModel = mongoose.model('GENERIC');

var controller = {};

// view routes

controller.viewCreate = function(req, res) {
	// render a view
	res.render('GENERIC/create');
};

controller.viewRead = function(req, res) {
	// render a view
	res.render('GENERIC/read');
};

controller.viewReadOne = function(req, res) {
	// render a view
	res.render('GENERIC/readOne');
};

controller.viewUpdate = function(req, res) {
	// render a view
	res.render('GENERIC/update');
};

controller.viewDelete = function(req, res) {
	// render a view
	res.render('GENERIC/delete');
};

// rest routes

controller.restCreate = function(req, res) {
	// perform some API action
	var data = {};
	res.json(data);
};

controller.restRead = function(req, res) {
	// perform some API action
	var data = {};
	res.json(data);
};

controller.restReadOne = function(req, res) {
	// perform some API action
	var data = {};
	res.json(data);
};

controller.restUpdate = function(req, res) {
	// perform some API action
	var data = {};
	res.json(data);
};

controller.restDelete = function(req, res) {
	// perform some API action
	var data = {};
	res.json(data);
};

module.exports = controller;