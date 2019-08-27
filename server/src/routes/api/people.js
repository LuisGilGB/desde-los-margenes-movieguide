const express = require('express');
const router = express.Router();
const passport = require('passport');

// Import People API business logic
const peopleBusinessLogic = require('../apiBusinessLogic/people.js');

// @route   GET api/people/test
// @desc    Tests people route
// @access  Public
router.get('/test', (req, res) => peopleBusinessLogic.test(req, res)
    .then(answer => res.json(answer))
    .catch(err => console.log(err)));

// @route   GET api/people
// @desc    Get all people into the database
// @access  Public
router.get('/', (req, res) => peopleBusinessLogic.getPeople(req, res)
    .then(people => res.json(people))
    .catch(err => console.log(err)));

// @route   POST api/people/add
// @desc    Add a new person
// @query   forceCreation Create a new record even if there already is a person with the same name.
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => peopleBusinessLogic.addPerson(req, res)
    .then(newPerson => res.json(newPerson))
    .catch(({errors, status}) => {
        console.log(errors);
        console.log('status', status);
        status && res.status(status).json(errors);
    }));

// @route   GET api/people/person/:personId
// @desc    Get a person from a given id
// @access  Public
router.get('/person/:personId', (req, res) => peopleBusinessLogic.getPerson(req, res)
    .then(person => res.json(person))
    .catch(({errors, status}) => {
        console.log(errors);
        console.log('status', status);
        status && res.status(status).json(errors);
    }));

// @route   PATCH api/people/person/:personId
// @desc    Get a person from a given id and update its data
// @access  Public
router.patch('/person/:personId', (req, res) => peopleBusinessLogic.updatePerson(req, res)
    .then(person => res.json(person))
    .catch(err => console.log(err)));

module.exports = router;
