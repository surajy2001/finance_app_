from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)


CORS(app)




@app.route('/')
def home():
    return "home"




@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
            'users': [
                'This is the server'
            ]
        }
    )
    
    









if __name__ == "__main__":
    app.run(debug=True)

