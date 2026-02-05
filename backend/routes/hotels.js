const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// @route   GET /api/hotels
// @desc    Get all hotels
// @access  Public
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.json(hotels);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
