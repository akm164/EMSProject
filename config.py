import os


class Config:
    # SQLite configuration for development.
    SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(os.path.abspath(os.path.dirname(__file__)), 'events.db')
    # Disable SQLAlchemy's modification tracking to reduce overhead.
    SQLALCHEMY_TRACK_MODIFICATIONS = False

    # JWT secret key for encoding/decoding JSON Web Tokens.
    SECRET_KEY = 'your-flask-secret-key-123'
    JWT_SECRET_KEY = 'your-jwt-secret-key-456'