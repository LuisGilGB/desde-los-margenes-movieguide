const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const languageCodes = require('../../config/languageCodes');

// Import models
const modelsDir = '../../models/';
const Country = require(`${modelsDir}Country`);

const validateCountryInput = require('../../validation/country/postCountry');

// @route   GET api/countries/test
// @desc    Tests countries route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Countries path works'}));

// @route   GET api/countries
// @desc    Get all countries into the database
// @query   lang Get all countries with its name in the given language.
// @access  Public
router.get('/', (req, res) => {
    const errors = {}
    Country.find()
        .then(countries => {
            if (!countries) {
                errors.countries = 'There are no countries';
                return res.status(404).json(errors);
            }
            const { lang } = req.query;
            if (lang && languageCodes.indexOf(lang) !== -1) {
                res.json(countries.map(c => ({countryId: c.countryId, shortName: c.shortName, name: c.name[lang]})));
            } else {
                res.json(countries.map(c => ({countryId: c.countryId, shortName: c.shortName, name: c.name})));
            }
        })
        .catch(err => console.log(err));
});

const registerCountry = (country = {}) => {
    const { errors, isValid } = validateCountryInput(country);

    return new Promise((resolve, reject) => {
        Country.findOneAndUpdate(
            { countryId: country.countryId },
            {
                countryId: country.countryId,
                shortName: country.shortName,
                name: country.name,
                flag: country.flag
            },
            {
                new: true,
                upsert: true
            }
        ).then(country => resolve(country)
        ).catch(err => reject(err));
    });
}

// @route   POST api/countries
// @desc    Register a new country into the database
// @access  Public
router.post('/', (req, res) => {
    const { body = {} } = req;
    let errors = {}

    if (Array.isArray(body)) {
        const badCountry = body.find(country => {
            const { isValid, errors: validatorErrors } = validateCountryInput(country);
            if (!isValid) {
                errors = {
                    country: (country && country.countryId) || 'Bad country',
                    ...validatorErrors
                }
            }
            return !isValid;
        });

        if (badCountry) {
            return res.status(400).json(errors);
        }

        Promise.all(body.map(c => registerCountry(c)))
               .then(countries => res.json(countries))
               .catch(err => console.log(err));
    } else {
        const { isValid, errors } = validateCountryInput(body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        registerCountry(body)
            .then(country => res.json(country))
            .catch(err => console.log(err));
    }
});

module.exports = router;
