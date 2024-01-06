## PaceDream Hotel Backend API ## </br>
Welcome to the PaceDream Hotel Backend API! This API is designed to handle hotel-related data, providing endpoints for posting and retrieving hotel information.
</br>

Getting Started 
</br>
To run this project locally, follow these steps:
</br>

Prerequisites </br>
Node.js installed on your machine </br>
MongoDB installed and running </br>
Installation </br>
Clone the repository: </br>

bash</br>
     
git clone <repository-url> </br>
Install dependencies:
</br>
cd <project-folder> </br>
npm install </br>
Set up environment variables: </br>

Create a .env file in the root directory and add the following variables: 
</br>
makefile
</br>
PORT=<your-port> </br>
MONGO_URI=<your-mongodb-uri> </br>
Running the Application </br>
Start the server:
</br>

npm start  </br>
Save to grepper </br>
The server will run on the specified port, and you should see the message "Server is running at the port <your-port>".
</br>
API Endpoints </br>
1. POST /api/hotel/post </br>
Create a new hotel entry.
</br>
Request:
</br>

{
  "name": "Hotel ABC", </br>
  "image": ["url1", "url2"],</br>
  "description": "Lorem ipsum...", </br>
  "offered": { ... }, </br>
  "standout_amenities": { ... }, </br>
  "describes_your_place": { ... },</br>
  "room_status": { ... },</br>
  "gender": "both",</br>
  "guests": 4,</br>
  "bedrooms": 2,</br>
  "beds": 3,</br>
  "bathrooms": 2,</br>
  "price_by": [ ... ],</br>
  "set_price": { ... },</br>
  "location": {</br>
    "type": "Point",</br>
    "coordinates": [longitude, latitude] </br>
  }</br>
}</br>
Response:
</br>
</br>
{
  "msg": "Data sent successfully! 😊", </br>
  "hotelData": { ... } </br>
}</br>
2. GET /api/hotel </br>
Retrieve all hotel entries.
</br>
Response:
</br>
[</br>
  {</br>
    "_id": "12345",</br>
    "name": "Hotel ABC",</br>
    "image": ["url1", "url2"],</br>
    "description": "Lorem ipsum...",</br>
    "offered": { ... },</br>
    "standout_amenities": { ... }, </br>
    "describes_your_place": { ... },</br>
    "room_status": { ... },</br>
    "gender": "both",</br>
    "guests": 4,</br>
    "bedrooms": 2,</br>
    "beds": 3,</br>
    "bathrooms": 2,</br>
    "price_by": [ ... ],</br>
    "set_price": { ... },</br>
    "location": {</br>
      "type": "Point",</br>
      "coordinates": [longitude, latitude] </br>
    },</br>
    "createdAt": "timestamp",</br>
    "updatedAt": "timestamp"</br>
  },</br>
  // ... other hotel entries
]</br>
Deployment
</br>
The API is deployed at https://pacedream.onrender.com/.
</br>
</br>
Tech-stack Used
</br>
Node.js </br>
Express.js </br> 
MongoDB </br>
Mongoose </br>
CORS </br>
Contributing   </br>
Feel free to contribute by submitting issues or pull requests.
</br>
</br>

