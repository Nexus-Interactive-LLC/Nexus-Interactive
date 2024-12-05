const express = require('express');
const Partner = require('../models/Partner');
const router = express.Router();

// Get all partners
router.get('/', async (req, res) => {
    try {
        const partners = await Partner.find();
        res.json(partners);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;

// Create a new partner
router.post('/', async (req, res) => {
    const { title, description, link, logo } = req.body;
    const partner = new Partner({
        title,
        description,
        link,
        logo
    });

    try {
        const savedPartner = await partner.save();
        res.status(201).json(savedPartner);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
