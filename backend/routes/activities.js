const express = require('express');
const router = express.Router();
const Activity = require('../models/Activity');

// @route   GET /api/activities
// @desc    Get all activities
// @access  Public
router.get('/', async (req, res) => {
    try {
        const activities = await Activity.findAll();
        res.json(activities);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
