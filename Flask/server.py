import os

ROOT = os.path.dirname(os.path.realpath(__file__))
BACKEND = os.path.dirname(os.path.realpath(__file__))
FRONTEND = os.path.dirname(os.path.realpath(__file__)) + '/public';

# core libs
from flask import *

# plugins

# models

# controllers
from controller.GENERIC import ControllerGeneric

# create servers
app = Flask(__name__, static_url_path='/public', static_folder='public', template_folder='view')

# config Flask
app.debug = True

# this route should follow an ActiveResource type standard
@app.route('/NOUN/VERB', methods=['GET'])
def main():
	return ControllerGeneric.viewRead()

# testing routes
# these should be removed before releasing into production
@app.route('/test', methods=['GET'])
def test():
	return ControllerGeneric.viewTest()

@app.route('/api/test', methods=['GET'])
def apiTest():
	return ControllerGeneric.apiTest()

# 404 error
@app.errorhandler(404)
def page_not_found(error):
    return render_template('_error/404.html'), 404

if __name__ == '__main__':
    app.run()