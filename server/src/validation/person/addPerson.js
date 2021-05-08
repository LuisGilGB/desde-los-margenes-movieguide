const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validatePersonToAdd(rawData) {
  const errors = {};

  const data = {
    ...(!isEmpty(rawData) ? rawData : {}),
    name: !isEmpty(rawData.name) ? rawData.name : '',
    description: !isEmpty(rawData.description) ? rawData.description : '',
    pic: !isEmpty(rawData.pic) ? rawData.pic : '',
  };

  if (Validator.isEmpty(data.name)) {
    errors.name = 'A name is required';
  }

  if (data.description && typeof data.description !== 'string') {
    errors.description = 'Description must be a string';
  }

  if (data.pic && !Validator.isURL(data.pic)) {
    errors.pic = 'Pic must be a valid URL';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
