# simple REST API with flask

from flask import Flask, jsonify, request
from flask_restful import Resource, Api
from flask_cors import CORS
from minimax import *

app = Flask(__name__)
cors = CORS(app, resources={r"*": {"origins": "*"}})
api = Api(app)


class TicTacoAPI(Resource):
    # get request
    def get(self):
        return "Hellooo"

    # post request
    def post(self):
        rec_json = request.get_json()
        print(rec_json["clickState"])
        click_state = rec_json["clickState"]

        # TODO:
        # aiMove(clickState)
        return 0, 201, {'Access-Control-Allow-Origin': '*'}


    # set up api resource routing
api.add_resource(TicTacoAPI, '/')

if __name__ == "__main__":
    app.run()