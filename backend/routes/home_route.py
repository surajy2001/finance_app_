from flask import jsonify, Blueprint

home_page_bp = Blueprint('home', __name__)

# * Home Page *
@home_page_bp.route('/', methods=['GET'])
def home():
    return jsonify(
        {
            'home': [
                'This is the server landing page (Home)'
            ]
        }
    )
    
    
__all__ = ['home_page_bp']