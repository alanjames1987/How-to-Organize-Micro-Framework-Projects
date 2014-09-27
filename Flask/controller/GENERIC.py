from flask import *

class ControllerGeneric(object):

	@staticmethod
	def viewTest():
		# render a view
		return render_template('GENERIC/CRUD.html');

	@staticmethod
	def viewCreate():
		# render a view
		return render_template('GENERIC/create.html');


	@staticmethod
	def viewRead():
		# render a view
		return render_template('GENERIC/read.html');


	@staticmethod
	def viewReadOne():
		# render a view
		return render_template('GENERIC/readOne.html');


	@staticmethod
	def viewUpdate():
		# render a view
		return render_template('GENERIC/update.html');


	@staticmethod
	def viewDelete():
		# render a view
		return render_template('GENERIC/delete.html');


	# api routes

	@staticmethod
	def apiTest():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);

	@staticmethod
	def apiCreate():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);

	@staticmethod
	def apiRead():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);

	@staticmethod
	def apiReadOne():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);

	@staticmethod
	def apiUpdate():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);

	@staticmethod
	def apiDelete():
		# perform some API action
		data = {'key':'value'};
		return jsonify(data);
