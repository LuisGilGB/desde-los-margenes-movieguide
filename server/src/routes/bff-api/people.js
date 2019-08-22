const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);

// Import People API
const peopleAPI = require('../api/people');

// Import validators
const validatePersonToAdd = require('../../validation/person/addPerson.js');

// @route   GET api/people/test
// @desc    Tests people route
// @access  Public
router.get('/test', (req, res) => {
    axios.get('http://localhost:5000/api/people/test')
        .then(({data}) => res.json(data))
        .catch(err => console.log(err));
});

module.exports = router;