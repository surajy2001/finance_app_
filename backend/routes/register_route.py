from flask import jsonify, Blueprint

register_bp = Blueprint('signup_page', __name__)

@register_bp.route('/register')
def signup_page():
    return jsonify(
        {
            'register': [
                'This is the register/sign up page'
            ]
        }
    )



__all__ = ['register_bp']
