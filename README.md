## PaceDream Hotel Backend API ##
Welcome to the PaceDream Hotel Backend API! This API is designed to handle hotel-related data, providing endpoints for posting and retrieving hotel information.

Getting Started
To run this project locally, follow these steps:

Prerequisites
Node.js installed on your machine
MongoDB installed and running
Installation
Clone the repository:

bash
Copy code
git clone <repository-url>
Install dependencies:

bash
Copy code
cd <project-folder>
npm install
Set up environment variables:

Create a .env file in the root directory and add the following variables:

makefile
Copy code
PORT=<your-port>
MONGO_URI=<your-mongodb-uri>
Running the Application
Start the server:

bash
Copy code
npm start
Save to grepper
The server will run on the specified port, and you should see the message "Server is running at the port <your-port>".

API Endpoints
1. POST /api/hotel/post
Create a new hotel entry.

Request:


{
  "name": "Hotel ABC",
  "image": ["url1", "url2"],
  "description": "Lorem ipsum...",
  "offered": { ... },
  "standout_amenities": { ... },
  "describes_your_place": { ... },
  "room_status": { ... },
  "gender": "both",
  "guests": 4,
  "bedrooms": 2,
  "beds": 3,
  "bathrooms": 2,
  "price_by": [ ... ],
  "set_price": { ... },
  "location": {
    "type": "Point",
    "coordinates": [longitude, latitude]
  }
}
Response:


{
  "msg": "Data sent successfully! 😊",
  "hotelData": { ... }
}
2. GET /api/hotel
Retrieve all hotel entries.

Response:

[
  {
    "_id": "12345",
    "name": "Hotel ABC",
    "image": ["url1", "url2"],
    "description": "Lorem ipsum...",
    "offered": { ... },
    "standout_amenities": { ... },
    "describes_your_place": { ... },
    "room_status": { ... },
    "gender": "both",
    "guests": 4,
    "bedrooms": 2,
    "beds": 3,
    "bathrooms": 2,
    "price_by": [ ... ],
    "set_price": { ... },
    "location": {
      "type": "Point",
      "coordinates": [longitude, latitude]
    },
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
  // ... other hotel entries
]
Deployment
The API is deployed at https://pacedream.onrender.com/.

Technologies Used
Node.js
Express.js
MongoDB
Mongoose
CORS
Contributing
Feel free to contribute by submitting issues or pull requests.

