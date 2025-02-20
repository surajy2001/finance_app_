from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)


CORS(app)


# @app.route('/')
# def home():
#     return "home"


# * Home Page *
@app.route('/api/home', methods=['GET'])
def users():
    return jsonify(
        {
            'users': [
                'This is the server home'
            ]
        }
    )
    
    
# * Login Page *
@app.route('/api/login')
def users():
    return jsonify(
        {
            'users': [
                'This is the server home'
            ]
        }
    )
    
    

# * Logout Page *
@app.route('/api/login')
def users():
    return jsonify(
        {
            'users': [
                'This is the server home'
            ]
        }
    )
    
    









if __name__ == "__main__":
    app.run(debug=True)

