from flask import Flask

from controller.GENERIC import ControllerGeneric

app = Flask(__name__)

app.debug = True

@app.route("/")
def main():
    return ControllerGeneric.read()

if __name__ == "__main__":
    app.run()