from flask import Flask, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager
from config import Config

# First i am Initialising the extensions
db = SQLAlchemy()
jwt = JWTManager()


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Then we need to Initialize the extensions with the app
    db.init_app(app)
    jwt.init_app(app)

    # This is where i am going to set up the Database and blueprint registration
    with app.app_context():
        from models import User, Event, Registration
        db.create_all()

        # Register blueprints for API endpoints
        from routes.auth import auth_bp
        from routes.events import events_bp
        from routes.organizers import organizers_bp

        app.register_blueprint(auth_bp, url_prefix='/api/auth')
        app.register_blueprint(events_bp, url_prefix='/api/events')
        app.register_blueprint(organizers_bp, url_prefix='/api/organizers')

    # Now i am going ti define the routes to serve templates

    @app.route('/')
    def home():
        return render_template('index.html')

    @app.route('/login', methods=['GET', 'POST'])
    def login():
        if request.method == 'POST':
            pass
        return render_template('login.html')

    @app.route('/signup')
    def signup():
        return render_template('signup.html')

    @app.route('/help')
    def help_page():
        return render_template('help.html')

    @app.route('/sports')
    def sports():
        return render_template('sports.html')

    @app.route('/seat')
    def seat():
        return render_template('seat.html')

    @app.route('/payment')
    def payment():
        return render_template('payment.html')

    @app.route('/receipt')
    def receipt():
        return render_template('receipt.html')

    @app.route('/create-event')
    def create_event():
        return render_template('eventcreate.html')

    @app.route('/concerts')
    def concerts():
        return render_template('concerts.html')

    @app.route('/forgot-password')
    def forgot_password():
        return render_template('forgot_password.html')

    @app.route('/google-login')
    def google_login():
        return redirect(url_for('home'))

    @app.route('/facebook-login')
    def facebook_login():
        return redirect(url_for('home'))

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(debug=True)
