const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const slugify = require('../../utils/slugify.js');
const isEmpty = require('../../validation/is-empty.js');

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
router.get('/test', (req, res) => peopleBusinessLogic.test(req, res)
    .then(answer => res.json(answer))
    .catch(err => console.log(err)));

// @route   GET api/people
// @desc    Get all people into the database
// @access  Public
router.get('/', (req, res) => peopleBusinessLogic.getPeople(req, res)
    .then(people => {
        res.json(people);
    })
    .catch(err => console.log(err)));

const checkAliasSlugExists = slug => new Promise((resolve, reject) => {
    Person.find({ uniqueAliasSlug: slug })
        .then(match => resolve(!isEmpty(match)))
        .catch(err => reject(err));
});

const getAvailableAlias = (slug, tryNum = 0) => new Promise((resolve, reject) => {
    if (tryNum > 15) {
        return reject("More than 16 unsuccessful attempts of getting a unique alias? Something may not be working right (we put this limit as a protection against infinite loops).")
    }
    const slugDraft = tryNum ? `${slug}-${tryNum}` : slug;
    checkAliasSlugExists(slugDraft)
        .then(match => match ? getAvailableAlias(slug, tryNum + 1) : resolve(slugDraft))
        .catch(err => reject(err));
});

const getUniqueAliasSlug = (name = '') => new Promise((resolve, reject) => {
    const slug = slugify(name);

    getAvailableAlias(slug)
        .then(finalSlug => resolve(finalSlug))
        .catch(err => reject(err));
});

// @route   POST api/people/add
// @desc    Add a new person
// @query   forceCreation Create a new record even if there already is a person with the same name.
// @access  Private
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { body = {}, query } = req;
    const { forceCreation = false } = query;
    const { errors, isValid } = validatePersonToAdd(body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const {name, description, pic} = body;

    Person.find({ name: name })
        .then(people => {
            if (!forceCreation && people && people.length) {
                errors.name = 'One or more people with this name already exists';
                errors.matchedPeople = people;
                return res.status(400).json(errors);
            } else {
                getUniqueAliasSlug(name)
                    .then(uniqueAliasSlug => {
                        const newPerson = new Person({
                            name: name,
                            uniqueAliasSlug,
                            description: description || '',
                            pic: pic || ''
                        });

                        // Save the new person into the database and return it as the service response.
                        newPerson.save()
                            .then(person => res.json(person))
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;
