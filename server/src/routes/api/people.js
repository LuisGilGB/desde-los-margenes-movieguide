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
    .catch(err => console.log(err)));

module.exports = router;
