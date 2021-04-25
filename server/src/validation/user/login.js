const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateRegisterInput(rawData) {
  const errors = {};
  const data = {
    ...rawData,
    email: !isEmpty(rawData.email) ? rawData.email : '',
    password: !isEmpty(rawData.password) ? rawData.password : '',
  };

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
