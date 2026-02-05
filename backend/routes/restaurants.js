const express = require('express');
const router = express.Router();
const Restaurant = require('../models/Restaurant');

// @route   GET /api/restaurants
// @desc    Get all restaurants
// @access  Public
router.get('/', async (req, res) => {
    try {
        const restaurants = await Restaurant.findAll();
        res.json(restaurants);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
