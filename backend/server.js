// Import dependencies
const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors');
const http = require('http');

// Initialize the app
const app = express();

// Use middlewares
app.use(cors());
app.use(express.json()); // Enable JSON parsing for request bodies

// Create server instance
const server = http.createServer(app);

// Environment variables
const PORT = process.env.PORT || 5000;

// Define routes
app.get('/', (req, res) => {
    res.send('Hi there! Welcome to the server.');
});

// Connecting with database
const dbConnect = require('./db/database');
dbConnect();

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// Export app for testing or further configuration
module.exports = app;
