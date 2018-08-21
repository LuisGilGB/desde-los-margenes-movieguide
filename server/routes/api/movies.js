const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Import models
const modelsDir = '../../models/';
const Movie = require(`${modelsDir}Movie`);
const Person = require(`${modelsDir}Person`);

// Import validators
const validateMovieToRegister = require('../../validation/movie/registerMovie');

// @route   GET api/movies/test
// @desc    Test movies route
// @acces   Public
router.get('/test', (req, res) => res.json({msg: 'Movies works'}));

// @route   GET api/movies
// @desc    Get all movies into the database
// @access  Public
router.get('/', (req, res) => {
    const errors = {}
    Movie.find()
        .then(movies => {
            if (!movies) {
                errors.movies = 'There are no movies';
                return res.status(404).json(errors);
            }
            res.json(movies);
        })
        .catch(err => console.log(err));
});

// @route   GET api/movies/randommovie
// @desc    Get a random movie from the database
// @access  Public
router.get('/randommovie', (req, res) => {
    const errors = {}
    Movie.countDocuments()
        .then(count => {
            const random = Math.floor(Math.random() * count);
            Movie.findOne()
                .skip(random)
                .then(movie => {
                    if (!movie) {
                        errors.movie = 'There are no movies';
                        return res.status(404).json(errors);
                    }
                    res.json(movie);
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// @route   POST api/movies/register
// @desc    Register a new movie
// @query   forceCreation Create a new record even if there already is a movie with the same title.
// @acces   Private
router.post('/register', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { body = {}, query } = req;
    const { forceCreation = false } = query;
    const { errors, isValid } = validateMovieToRegister(body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Movie.find({ title: body.title })
        .then(movies => {
            if (!forceCreation && movies && movies.length) {
                errors.title = 'One or more movies with this title already exists';
                errors.matchedMovies = movies;
                return res.status(400).json(errors);
            } else {
                const newMovie = new Movie({
                    title           : body.title,
                    originalTitle   : body.originalTitle,
                    description     : body.description,
                    year            : body.year,
                    minutesLength   : body.minutesLength
                });

                newMovie.save()
                    .then(movie => res.json(movie))
                    .catch(err => console.log(err));
            }
        })
        .catch(err => console.log(err));
});

module.exports = router;