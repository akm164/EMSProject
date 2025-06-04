from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from models import Event, Registration, db
from datetime import datetime

# Below we  are creating a blueprint for event-related endpoints
events_bp = Blueprint('events', __name__)


# GET /api/events/ - Retrieve all events here
@events_bp.route('/', methods=['GET'])
def get_events():
    events = Event.query.all()
    output = []
    for event in events:
        output.append({
            'id': event.id,
            'title': event.title,
            'description': event.description,
            'date': event.date.strftime("%Y-%m-%d %H:%M:%S"),
            'location': event.location,
            'price': event.price,
            'organizer_id': event.organizer_id
        })
    return jsonify(output), 200


# GET /api/events/<event_id> - Retrieve details for a specific event
@events_bp.route('/<int:event_id>', methods=['GET'])
def get_event(event_id):
    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Event not found'}), 404
    output = {
        'id': event.id,
        'title': event.title,
        'description': event.description,
        'date': event.date.strftime("%d/%m/%Y %H:%M:%S"),
        'location': event.location,
        'price': event.price,
        'organizer_id': event.organizer_id
    }
    return jsonify(output), 200


# POST /api/events/ - Create a new event (organizers only)
@events_bp.route('/', methods=['POST'])
@jwt_required()
def create_event():
    identity = get_jwt_identity()
    if identity['role'] != 'organizer':
        return jsonify({'message': 'Only organizers can create events'}), 403

    data = request.get_json()
    title = data.get('title')
    description = data.get('description')
    date_str = data.get('date')
    location = data.get('location')
    price = data.get('price', 0.0)

    # Validating the date input
    try:
        date_obj = datetime.strptime(date_str, "%d/%m/%Y %H:%M:%S")
    except ValueError:
        # Returning an error if the date string does not match our Australian format.
        return jsonify({'message': 'Incorrect date format. Use DD/MM/YYYY HH:MM:SS'}), 400

    event = Event(
        title=title,
        description=description,
        date=date_obj,
        location=location,
        price=price,
        organizer_id=identity['id']
    )
    db.session.add(event)
    db.session.commit()

    return jsonify({'message': 'Event created successfully', 'event_id': event.id}), 201


# POST /api/events/<event_id>/register - Register for an event
@events_bp.route('/<int:event_id>/register', methods=['POST'])
@jwt_required()
def register_event(event_id):
    data = request.get_json()
    registration_type = data.get('registration_type', 'free')
    identity = get_jwt_identity()

    event = Event.query.get(event_id)
    if not event:
        return jsonify({'message': 'Event not found'}), 404

    registration = Registration(
        event_id=event_id,
        user_id=identity['id'],
        registration_type=registration_type
    )
    db.session.add(registration)
    db.session.commit()

    return jsonify({'message': 'Registration successful', 'registration_id': registration.id}), 201
