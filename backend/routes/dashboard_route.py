from flask import jsonify, Blueprint


dashboard_bp = Blueprint('dashboard', __name__)


@dashboard_bp.route('/dashboard', methods=['GET'])
def dashboard():
    return jsonify(
        {
            'dashboard':[
                'Dashboard'
            ]
        }
    )
    
    
    
__all__ = ['dashboard_bp']