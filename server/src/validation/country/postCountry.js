const Validator = require('validator');
const isEmpty = require('../is-empty');
const languageCodes = require('../../config/languageCodes');

module.exports = function validateCountryInput (countryData) {
    const errors = {}

    countryData = !isEmpty(countryData) ? countryData : {};
    countryData.countryId = !isEmpty(countryData.countryId) ? countryData.countryId : '';
    countryData.shortName = !isEmpty(countryData.shortName) ? countryData.shortName : '';
    countryData.name      = !isEmpty(countryData.name)      ? countryData.name      : {};
    countryData.flag      = !isEmpty(countryData.flag)      ? countryData.flag      : '';

    if (Validator.isEmpty(countryData.countryId)) {
        errors.countryId = 'Country ID is required';
    } else if (!Validator.isLength(countryData.countryId, { min: 2, max: 3 })) {
        errors.countryId = 'The country ID must be between 2 and 3 characters';
    }

    if (Validator.isEmpty(countryData.shortName)) {
        errors.shortName = 'Short name is required';
    } else if (!Validator.isLength(countryData.shortName, { min: 3, max: 3 })) {
        errors.shortName = 'A short name must have 3 characters';
    }

    if (isEmpty(countryData.name)) {
        errors.name = 'Name is required';
    } else if (typeof countryData.name !== 'object') {
        errors.name = 'Name must be an object';
    } else if (!languageCodes.some(code => !isEmpty(countryData.name[code]))) {
        errors.name = 'There are no names for any valid language';
    }

    if (countryData.flag && !Validator.isURL(countryData.flag)) {
        errors.flag = 'The flag must be a valid URL';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}