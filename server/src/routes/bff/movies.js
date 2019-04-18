const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Import models
const modelsDir = '../../models/';
const modelsBffDir = `${modelsDir}bff/`;
const Movie = require(`${modelsDir}Movie`);
const MoviesList = require(`${modelsBffDir}MoviesListItem`);

const createMovieListItem = (rawMovie = {}) => {
    const newMovieListItem = new MoviesList({
        movieId: m._id,
        title: m.title,
        year: m.year
    });

    newMovieListItem.save()
        .then(nML => console.log(`Movie with id ${newMovieListItem.movieId} added to BFF Movies List database`))
        .catch(err => console.log(err));
}

// @route   GET bff/movies/test
// @desc    Test movies route
// @acces   Public
router.get('/test', (req, res) => res.json({msg: 'BFF Movies works'}));

// @route   GET bff/movies
// @desc    Get all movies into the database as MoviesListItems
// @access  Public
router.get('/', (req, res) => {
    const errors = {}
    Movie.find()
        .then(movies => {
            if (!movies) {
                errors.movies = 'There are no movies';
                return res.status(404).json(errors);
            }
            const bffMovies = movies.map(m => ({
                movieId: m._id,
                title: m.title,
                year: m.year
            }));
            res.json(bffMovies);
        })
        .catch(err => console.log(err));
});

module.exports = router;