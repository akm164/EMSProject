# EventMax (EMS)

EventMax is a Flask-based Event Management System that simplifies event discovery, registration, and administration for attendees and organizers alike.

---

## Table of Contents

- [Features](#features)  
- [Tech Stack](#tech-stack)  
- [Prerequisites](#prerequisites)  
- [Installation](#installation)  
- [Configuration](#configuration)  
- [Running the Application](#running-the-application)  
- [Directory Structure](#directory-structure)  
- [Database](#database)  
- [Testing](#testing)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

---

## Features

| Feature                     | Status     |
|-----------------------------|------------|
| User Registration & Login   | Complete   |
| Guest Login                 | Complete   |
| Event Browsing & Search     | Complete   |
| Event Detail Page           | Complete   |
| Ticket Booking & Payment    | Complete   |
| Booking Confirmation        | Complete   |
| Organizer Dashboard         | Complete   |
| Create Event (Organizer)    | Complete   |
| Admin Review System         | Complete   |
| Responsive Design           | Complete   |
| Contact Form                | Complete   |
| User Review & Feedback      | Incomplete |
| Profile Management          | Incomplete |

---

## Tech Stack

- Python 3.x  
- Flask  
- SQLite (SQLAlchemy ORM)  
- HTML5, CSS3, JavaScript  
- PayPal, Visa & Mastercard APIs  
- Mocha & Chai for unit tests  
- Selenium for end-to-end tests  
- Trello & GitHub for project management  

---

## Prerequisites

- Python 3.12 or higher  
- pip  
- Git  

---

## Installation
```
1. Clone the repository  
   git clone https://github.com/akm164/EMSProject.git
   cd EMSProject
   
3. Create and activate a virtual environment
   python3 -m venv venv
   source venv/bin/activate    # macOS/Linux
   venv\Scripts\activate       # Windows

4. Install dependencies
   pip install -r requirements.txt
```

## Configuration
```
1. Copy or rename config.py.example to config.py (if provided) or edit config.py directly.

2. Set the following variables in config.py:
   SECRET_KEY
   DATABASE_URI
   PayPal, Visa, and Mastercard credentials

3. Initialize the database:
   flask shell
   >>> from models import db
   >>> db.create_all()
   >>> exit()
```

## Running the Application
```
Development mode:
python app.py
Open your browser at http://127.0.0.1:5000/.

Production mode with Gunicorn:
gunicorn app:app
```

## Directory Structure
```
EMSProject/
├── client
│   ├── node_modules/
│   ├── package.json
│   ├── package-lock.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── log0192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── README.md
│   └── src
│       ├── index.js
│       ├── index.css
│       ├── logo.svg
│       ├── reportWebVitals.js
│       ├── setupTests.js
│       ├── App.js
│       ├── App.css
│       ├── App.test.js
│       └── components
│           ├── CreateEvent.js
│           ├── EventDetail.js
│           ├── EventList.js
│           ├── Home.js
│           ├── Login.js
│           ├── Navbar.js
│           ├── Payment.js
│           └── Register.js
├── server
│   ├── app.py
│   └── instance
│       └── event_management.db
└── venv/
```

## Database
```
Uses SQLite by default for development. Update DATABASE_URI in config.py to point to PostgreSQL or another production database.
Core tables and relationships:
   Users
   Events
   Bookings
   Payments
   Reviews
```

## Testing
```
Run unit tests with Mocha & Chai.
Import postman_collection.json into Postman for API testing.
Execute end-to-end tests using Selenium.
```
## Deployment
```
Heroku (example)
1. Create a Procfile at the repo root:
   web: gunicorn app:app

2. Commit and push to Heroku:
   git add Procfile
   git commit -m "Configure Heroku deployment"
   git push heroku main
Your live app will be available at https://<your-app-name>.herokuapp.com.
```

## Contributing
```
1. Fork the repository

2. Create a feature branch:
   git checkout -b feature/your-feature

3. Commit your changes:
   git commit -m "Add your feature"

4. Push to your branch:
   git push origin feature/your-feature

5. Open a Pull Request
```

## License
```
This project is licensed under the MIT License.
```

## Contact
```
Aalok Kumar Mandal – https://github.com/akm164
Dr. Jack (Jie) Yang – Lecturer, CSIT314, University of Wollongong
