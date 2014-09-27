<?php

class ControllerGeneric {

	// view routes

	public static function viewTest($app) {
		// return a view
		$app -> render('GENERIC/CRUD.php');
	}

	public static function viewCreate($app) {
		// return a view
		$app -> render('GENERIC/create.php');
	}

	public static function viewRead($app) {
		// return a view
		$app -> render('GENERIC/read.php');
	}

	public static function viewReadOne($app) {
		// return a view
		$app -> render('GENERIC/readOne.php');
	}

	public static function viewUpdate($app) {
		// return a view
		$app -> render('GENERIC/update.php');
	}

	public static function viewDelete($app) {
		// return a view
		$app -> render('GENERIC/delete.php');
	}

	// api routes

	public static function apiTest($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

	public static function apiCreate($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

	public static function apiRead($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

	public static function apiReadOne($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

	public static function apiUpdate($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

	public static function apiDelete($app) {
		// perform some API action
		$data = array(
			'key' => 'value'
		);
		return json_encode($data);
	}

}
