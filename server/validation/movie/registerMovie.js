const Validator = require('validator');
const isEmpty = require('../is-empty');

module.exports = function validateMovieRegisterInput (movieData) {
    const errors = {}

    movieData = !isEmpty(movieData) ? movieData : {};
    movieData.title = !isEmpty(movieData.title) ? movieData.title : '';
    movieData.originalTitle = !isEmpty(movieData.originalTitle) ? movieData.originalTitle : movieData.title;
    movieData.description = !isEmpty(movieData.description) ? movieData.description : '';
    movieData.year = !isEmpty(movieData.year) ? movieData.year : (new Date).getFullYear();
    movieData.minutesLength = !isEmpty(movieData.minutesLength) ? movieData.minutesLength : 0;

    if (Validator.isEmpty(movieData.title)) {
        errors.title = "The movie must have a title";
    } else if (typeof movieData.title !== 'string') {
        errors.title = 'Title must be a string';
    }

    if (Validator.isEmpty(movieData.originalTitle)) {
        errors.originalTitle = "The movie must have an original title";
    } else if (typeof movieData.originalTitle !== 'string') {
        errors.originalTitle = 'Original title must be a string';
    }

    if (typeof movieData.description !== 'string') {
        errors.description = 'Description must be a string';
    }

    if (typeof movieData.year !== 'number') {
        errors.title = "Year must be a number";
    }

    if (typeof movieData.minutesLength !== 'number') {
        errors.title = "Minutes length must be a number";
    }
    
    return {
        errors,
        isValid: isEmpty(errors)
    }
}