from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Event, Registration

# Creating a blueprint for organizer endpoints
organizers_bp = Blueprint('organizers', __name__)


# GET /api/organizers/dashboard - Return organizer's events with registration counts
@organizers_bp.route('/dashboard', methods=['GET'])
@jwt_required()
def dashboard():
    identity = get_jwt_identity()
    if identity['role'] != 'organizer':
        return jsonify({'message': 'Unauthorized: Only organizers can access the dashboard'}), 403

    # Retrieving all events created by the organizer
    events = Event.query.filter_by(organizer_id=identity['id']).all()
    dashboard_data = []
    for event in events:
        reg_count = Registration.query.filter_by(event_id=event.id).count()
        dashboard_data.append({
            'event_id': event.id,
            'title': event.title,
            'registration_count': reg_count
        })

    return jsonify(dashboard_data), 200
