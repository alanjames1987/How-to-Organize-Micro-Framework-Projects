class ControllerGeneric

	def self.viewTest():
		# render a view
		erb :'GENERIC/CRUD.html'
	end

	def self.viewCreate():
		# render a view
		erb :'GENERIC/create.html'
	end

	def self.viewRead():
		# render a view
		erb :'GENERIC/read.html'
	end

	def self.viewReadOne():
		# render a view
		erb :'GENERIC/readOne.html'
	end

	def self.viewUpdate():
		# render a view
		erb :'GENERIC/update.html'
	end

	def self.viewDelete():
		# render a view
		erb :'GENERIC/delete.html'
	end

	# api routes

	def self.apiTest():
		# perform some API action
	end

	def self.apiCreate():
		# perform some API action
	end

	def self.apiRead():
		# perform some API action
	end

	def self.apiReadOne():
		# perform some API action
	end

	def self.apiUpdate():
		# perform some API action
	end

	def self.apiDelete():
		# perform some API action
	end

end