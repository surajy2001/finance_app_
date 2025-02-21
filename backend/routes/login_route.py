from flask import jsonify, Blueprint


login_bp = Blueprint('log_in', __name__)


@login_bp.route('/login')
def log_in():
    return jsonify(
        {
            'login_page' : [
                'This is the Login Page'
            ]
        }
    )
    
__all__ = ['login_bp']