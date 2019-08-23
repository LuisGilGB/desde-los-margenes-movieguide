const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const axios = require('axios');

// Import People API business logic
const peopleBusinessLogic = require('../apiBusinessLogic/people.js');

// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);

// Import validators
const validatePersonToAdd = require('../../validation/person/addPerson.js');

// @route   GET api/people/test
// @desc    Tests people route
// @access  Public
router.get('/test', (req, res) => peopleBusinessLogic.test(req)
    .then(answer => res.json(answer))
    .catch(err => console.log(err)));

module.exports = router;