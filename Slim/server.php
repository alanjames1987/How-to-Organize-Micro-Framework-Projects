<?php

define('ROOT', dirname(__FILE__));
define('BACKEND', dirname(__FILE__));
define('FRONTEND', dirname(__FILE__) . '/public');

// core libs
require ('vendor/autoload.php');

$config = require ('config/config.php');

// plugins

// models

// conrtollers
require ('controller/GENERIC.php');

// create servers
$app = new \Slim\Slim();

// config Slim
$app -> config(array('templates.path' => BACKEND . '/view', ));

// this route should follow an ActiveResource type standard
$app -> get('/NOUN/VERB', function() use ($app){
	echo ControllerGeneric::viewRead($app);
});

// testing routes
// these should be removed before releasing into production
$app -> get('/test', function() use ($app){
	echo ControllerGeneric::viewTest($app);
});

$app -> get('/api/test', function() use ($app){
	echo ControllerGeneric::apiTest($app);
});

// 404 error
$app -> notFound(function() use ($app) {

});

$app -> run();
