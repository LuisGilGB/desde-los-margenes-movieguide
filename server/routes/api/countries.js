const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Import models
const modelsDir = '../../models/';
const Country = require(`${modelsDir}Country`);

// @route   GET api/countries/test
// @desc    Tests countries route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Countries works'}));

// @route   GET api/countries/test
// @desc    Tests countries route
// @access  Public
router.get('/', (req, res) => {
    Country.find()
        .then(countries => {
            if (!countries) {
                return res.status(404).json({ countries: 'There are no countries' });
            }
            res.json(countries);
        })
        .catch(err => res.status(500).json(err));
});

module.exports = router;
