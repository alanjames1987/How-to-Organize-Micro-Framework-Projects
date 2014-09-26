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

$app = new \Slim\Slim();

$app -> config(array('templates.path' => BACKEND . '/view', ));

$app -> get('/', function() use ($app){
	echo ControllerGeneric::viewRead($app);
});

$app -> run();
