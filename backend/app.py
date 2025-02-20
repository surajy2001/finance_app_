from flask import Flask, jsonify
from flask_cors import CORS
from home_route import home_page_bp


app = Flask(__name__)


CORS(app)

app.register_blueprint(home_page_bp)

# @app.route('/')
# def home():
#     return "home"


    
# * Login Page *
@app.route('/api/login')
def login():
    return jsonify(
        {
            'users': [
                'This is the server home'
            ]
        }
    )
    
    

# * Logout Page *
@app.route('/api/logout')
def logout():
    return jsonify(
        {
            'users': [
                'This is the server home'
            ]
        }
    )
    
    









if __name__ == "__main__":
    app.run(debug=True)

