const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validatePersonInput (personData) {
    const errors = {}

    personData = !isEmpty(personData) ? personData : {};
    personData.name = !isEmpty(personData.name) ? personData.name : '';
    personData.description = !isEmpty(personData.description) ? personData.description : '';
    personData.pic = !isEmpty(personData.pic) ? personData.pic : '';

    if (Validator.isEmpty(personData.name)) {
        errors.name = 'A name is required';
    }

    if (personData.description && typeof personData.description !== 'string') {
        errors.description = 'Description must be a string';
    }

    if (personData.pic && !Validator.isURL(personData.pic)) {
        errors.pic = 'Pic must be a valid URL';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}