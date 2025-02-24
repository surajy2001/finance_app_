from flask import jsonify, Blueprint


bank_login_bp = Blueprint('user_bank_login', __name__)


@bank_login_bp.route('/user_ach_signin')
def user_bank_login():
    return jsonify(
        {
            'user_bank_sigin': [
                'This is the user bank login page'
            ]
        }
    )


