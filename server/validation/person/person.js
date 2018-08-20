const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validatePersonInput (personData) {
    const errors = {}

    personData = !isEmpty(personData) ? personData : {};
    personData.name = !isEmpty(personData.name) ? personData.name : '';

    if (Validator.isEmpty(personData.name)) {
        errors.name = 'A name is required';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}