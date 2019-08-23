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

// @route   GET bff/people/test
// @desc    Tests people route
// @access  Public
router.get('/test', (req, res) => peopleBusinessLogic.test(req)
    .then(answer => res.json(answer))
    .catch(err => console.log(err)));

// @route   GET bff/people
// @desc    Get all people into the database
// @access  Public
router.get('/', (req, res) => {
    peopleBusinessLogic.getPeople(req)
        .then(people => {
            const errors = {}
            if (!people) {
                errors.people = 'There are no people';
                return res.status(404).json(errors);
            }
            const peopleForBFF = people.map(p => ({
                id: p.uniqueAliasSlug,
                name: p.name,
                description: p.name,
                pic: p.pic,
                countries: p.countries,
                movies: p.movies
            }));
            res.json(peopleForBFF);
        })
        .catch(err => console.log(err));
});

module.exports = router;