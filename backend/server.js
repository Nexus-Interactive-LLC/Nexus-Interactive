const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const partnerRoutes = require('./routes/partners');
const serviceRoutes = require('./routes/services');
const contactRoutes = require('./routes/contact');

const app = express();
app.use(bodyParser.json()); // To parse JSON bodies

// Connect to MongoDB
require('./db');  // Import MongoDB connection setup

// Use routes
app.use('/api/partners', partnerRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);

// Start the server
app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
