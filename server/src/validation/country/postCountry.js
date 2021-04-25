const Validator = require('validator');
const isEmpty = require('../is-empty');
const languageCodes = require('../../config/languageCodes');

module.exports = function validateCountryInput(rawData) {
  const errors = {};

  const data = {
    ...(!isEmpty(rawData) ? rawData : {}),
    countryId: !isEmpty(rawData.countryId) ? rawData.countryId : '',
    shortName: !isEmpty(rawData.shortName) ? rawData.shortName : '',
    name: !isEmpty(rawData.name) ? rawData.name : {},
    flag: !isEmpty(rawData.flag) ? rawData.flag : '',
  };

  if (Validator.isEmpty(data.countryId)) {
    errors.countryId = 'Country ID is required';
  } else if (!Validator.isLength(data.countryId, { min: 2, max: 3 })) {
    errors.countryId = 'The country ID must be between 2 and 3 characters';
  }

  if (Validator.isEmpty(data.shortName)) {
    errors.shortName = 'Short name is required';
  } else if (!Validator.isLength(data.shortName, { min: 3, max: 3 })) {
    errors.shortName = 'A short name must have 3 characters';
  }

  if (isEmpty(data.name)) {
    errors.name = 'Name is required';
  } else if (typeof data.name !== 'object') {
    errors.name = 'Name must be an object';
  } else if (!languageCodes.some((code) => !isEmpty(data.name[code]))) {
    errors.name = 'There are no names for any valid language';
  }

  if (data.flag && !Validator.isURL(data.flag)) {
    errors.flag = 'The flag must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
