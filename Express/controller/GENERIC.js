var mongoose = require('mongoose');

var genericModel = mongoose.model('GENERIC');

var controller = {};

// view routes

controller.viewTest = function(req, res) {
	// render a view
	res.render('GENERIC/CRUD');
};

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

// API routes

controller.apiTest = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

controller.apiCreate = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

controller.apiRead = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

controller.apiReadOne = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

controller.apiUpdate = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

controller.apiDelete = function(req, res) {
	// perform some API action
	var data = {key:'value'};
	res.json(data);
};

module.exports = controller;