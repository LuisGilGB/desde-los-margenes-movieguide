const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateRegisterInput(rawData) {
  const errors = {};

  const data = {
    ...rawData,
    name: !isEmpty(rawData.name) ? rawData.name : '',
    email: !isEmpty(rawData.email) ? rawData.email : '',
    password: !isEmpty(rawData.password) ? rawData.password : '',
    password2: !isEmpty(rawData.password2) ? rawData.password2 : '',
  };

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  } else if (!Validator.isLength(data.name, { min: 2, max: 32 })) {
    errors.name = 'Name must be between 2 and 32 characters';
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = 'Email field is required';
  } else if (!Validator.isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password field is required';
  } else if (!Validator.isLength(data.password, { min: 6, max: 32 })) {
    errors.password = 'Password must be between 6 and 32 characters';
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = 'Password2 field is required';
  } else if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = 'Passwords do not match';
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
