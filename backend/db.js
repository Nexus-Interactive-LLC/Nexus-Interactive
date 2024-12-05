require('dotenv').config();  // Load environment variables from .env file

const mongoose = require('mongoose');
const PASSWORD = process.env.PASSWORD;
const USERNAME = process.env.USERNAME;


mongoose.connect(`mongodb+srv://${USERNAME}:${PASSWORD}@nexus-interactive.ssgy4.mongodb.net/nexus_interactive?retryWrites=true&w=majority&appName=nexus-interactive`, {})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });
