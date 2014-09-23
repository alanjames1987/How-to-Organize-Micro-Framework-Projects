<?php

define('__ROOT', dirname(__FILE__) . '/..');
define('__BACKEND', dirname(__FILE__) . '/..');
define('__FRONTEND', dirname(__FILE__));

// core libs
require ('../vendor/autoload.php');

// plugins

// models

// conrtollers
require ('../controller/GENERIC.php');

$app = new \Slim\Slim();

$app -> config(array('templates.path' => BACKEND_ROOT . '/view', ));

$app -> get('/', function() use ($app){
	echo GenericController::viewRead();
});

$app -> run();
