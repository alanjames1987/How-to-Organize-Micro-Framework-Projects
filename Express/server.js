__root = __dirname;
__backend = __dirname;
__frontend = __dirname + '/public';

// core libs
var express = require('express');
var http = require('http');
var io = require('socket.io');
var mongoose = require('mongoose');

// plugins
var somePlugin = require('./plugin/GENERIC/GENERIC');

// models
require('./model/GENERIC');

// listeners
var listenerGENERIC = require('./listener/GENERIC');

// controllers
var controllerGENERIC = require('./controller/GENERIC');

// create servers
var app = express();
var httpServer = http.createServer(app);
var socketIOServer = io.listen(httpServer);

// configure Mongoose
mongoose.connect('mongodb://localhost/GENERIC');

// configure Socket.IO

// setup socket event listeners
socketIOServer.sockets.on('connection', function(socket) {

	// the socket is passed in as the first parameter
	// in order to make it accessible in the listener
	socket.on('NOUN.VERB', function(data) {
		listenerGENERIC.VERB(socket, data);
	});

});

// config Express
app.set('port', process.env.PORT || 3000);

app.set('views', 'view');
app.set('view engine', 'ejs');

// configure Express plugins
app.use(express.static(__frontend));

// this route should follow an ActiveResource type standard
app.get('/NOUN/VERB', controllerGENERIC.viewRead);

// 404 error
app.use(function(req, res, next) {

	var data = {};
	data.session = req.session;

	res.status(404).render('_error/404', data);

});

httpServer.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port') + ' and process ' + process.pid);
});