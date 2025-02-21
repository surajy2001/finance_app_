from flask import Flask, jsonify
from flask_cors import CORS
from routes.home_route import home_page_bp
from routes.dashboard_route import dashboard_bp
from routes.login_route import login_bp
from routes.register_route import register_bp




app = Flask(__name__)



CORS(app)


# * Blueprints of all our Routes * #
app.register_blueprint(home_page_bp)
app.register_blueprint(dashboard_bp)
app.register_blueprint(login_bp)
app.register_blueprint(register_bp)

# @app.route('/')
# def home():
#     return "home"


    

    









if __name__ == "__main__":
    app.run(debug=True)

