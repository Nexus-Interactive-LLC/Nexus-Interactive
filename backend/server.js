const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const partnerRoutes = require('./routes/partners');
const serviceRoutes = require('./routes/services');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // To parse JSON bodies

// Connect to MongoDB
require('./db');  // Import MongoDB connection setup

// Use routes with '/api' prefix
app.use('/partners', partnerRoutes);
app.use('/services', serviceRoutes);
app.use('/contact', contactRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
