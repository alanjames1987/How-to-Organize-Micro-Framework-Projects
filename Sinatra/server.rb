# core libs
require 'sinatra'

# plugins

# models

# controllers

# create servers

# config Sinatra
set :views, settings.root + '/view'

set :public_folder, File.dirname(__FILE__) + '/public'

# this route should follow an ActiveResource type standard
get '/' do
	erb :'GENERIC/CRUD'
end

# testing routes
# these should be removed before releasing into production
get '/test' do
end

get '/api/test' do
end

# 404 error
not_found do
  'This is nowhere to be found.'
end
