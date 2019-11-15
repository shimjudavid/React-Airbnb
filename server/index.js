const express = require('express');
const cors = require("cors");
const connectDB = require('./config/db');
const app = express();
const FakeDB = require('./fake-db');

//connect Database
connectDB();

/*
//used to populate rentals, so comment when not needed
const fakeDB = new FakeDB();
fakeDB.seedDB();
*/

/*
express.json Middleware
=========================
This is a built-in middleware function in Express.
It parses incoming requests with JSON payloads and is based on body-parser.
This middleware is available in Express v4.16.0 onwards.
*/
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json({extended: false}));

// Define routes
app.use('/api/v1/rentals', require('./routes/rentals'));


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`application listening to port ${PORT}`));