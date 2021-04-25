const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateMovieRegisterInput(rawData) {
  const errors = {};

  const data = {
    ...(!isEmpty(rawData) ? rawData : {}),
    title: !isEmpty(rawData.title) ? rawData.title : '',
    originalTitle: !isEmpty(rawData.originalTitle)
      ? rawData.originalTitle
      : rawData.title,
    description: !isEmpty(rawData.description) ? rawData.description : '',
    year: !isEmpty(rawData.year) ? rawData.year : new Date().getFullYear(),
    minutesLength: !isEmpty(rawData.minutesLength) ? rawData.minutesLength : 0,
  };

  if (Validator.isEmpty(data.title)) {
    errors.title = 'The movie must have a title';
  } else if (typeof data.title !== 'string') {
    errors.title = 'Title must be a string';
  }

  if (Validator.isEmpty(data.originalTitle)) {
    errors.originalTitle = 'The movie must have an original title';
  } else if (typeof data.originalTitle !== 'string') {
    errors.originalTitle = 'Original title must be a string';
  }

  if (typeof data.description !== 'string') {
    errors.description = 'Description must be a string';
  }

  if (typeof data.year !== 'number') {
    errors.title = 'Year must be a number';
  }

  if (typeof data.minutesLength !== 'number') {
    errors.title = 'Minutes length must be a number';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
