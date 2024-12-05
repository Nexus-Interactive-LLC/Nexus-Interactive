const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');  // Import the Contact model

// POST: Save contact form submission
router.post('/', async (req, res) => {
    const { name, email, message } = req.body;

    // Create a new contact form submission
    const newContact = new Contact({
        name,
        email,
        message
    });

    try {
        await newContact.save(); // Save the submission to the database
        res.status(201).json({ message: 'Contact form submitted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Error saving contact form' });
    }
});

module.exports = router;