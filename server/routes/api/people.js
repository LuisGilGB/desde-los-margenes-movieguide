const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Import models
const modelsDir = '../../models/';
const Person = require(`${modelsDir}Person`);

const validatePersonInput = require('../../validation/person/person');

// @route   GET api/people/test
// @desc    Tests people route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'People path works'}));

// @route   POST api/people/add
// @desc    Add a new person
// @query   forceCreation Create a new record even if there already is a person with the same name.
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { body = {}, query } = req;
    const { forceCreation = false } = query;
    const { errors, isValid } = validatePersonInput(body);

    if (!isValid) {
        return res.status(400).json({ errors });
    }

    Person.find({ name: body.name })
        .then(people => {
            if (!forceCreation && people && people.length) {
                errors.name = 'One or more people with this name already exists';
                errors.matchedPeople = people;
                return res.status(400).json(errors);
            } else {
                const newPerson = new Person({
                    name: body.name,
                    description: body.description || '',
                    pic: body.pic || ''
                });

                // Save the new person into the database and return it as the service response.
                newPerson.save()
                    .then(person => res.json(person))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;
