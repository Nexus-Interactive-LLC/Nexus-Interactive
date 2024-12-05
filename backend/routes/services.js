const express = require('express');
const Service = require('../models/Service');  // Import the Service model
const router = express.Router();

// Get all services
router.get('/', async (req, res) => {
    try {
        const services = await Service.find();  // Fetch all services from MongoDB
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching services' });
    }
});

// Add a new service
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;
        const newService = new Service({ title, description });
        await newService.save();  // Save the service in MongoDB
        res.status(201).json(newService);
    } catch (err) {
        res.status(400).json({ message: 'Error adding service' });
    }
});

module.exports = router;
