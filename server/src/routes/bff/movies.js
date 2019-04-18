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

// TODO: This are not real BFF services yet.

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
                year: m.year,
                directors: 'El dire',
                countries: ['es']
            }));
            res.json(bffMovies);
        })
        .catch(err => console.log(err));
});

// @route   GET bff/movies/:movieid
// @desc    Get a movie from a given movieId as MovieDetail
// @access  Public
router.get('/movie/:movieId', (req, res) => {
    const errors = {}
    Movie.findById(req.params.movieId)
        .then(movie => {
            if (!movie) {
                errors.movie = 'There are no movies';
                return res.status(404).json(errors);
            }
            const bffMovie = {
                movieId: movie._id,
                title: movie.title,
                originalTitle: movie.originalTitle,
                description: movie.description,
                year: movie.year,
                minutesLength: movie.minutesLength,
                directors: movie.directors,
                actors: movie.actors,
                countries: movie.countries
            }
            res.json(bffMovie);
        })
        .catch(err => console.log(err));
});

// @route   GET bff/movies/randommovie
// @desc    Get a random movieId from the database
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
                    res.json({movieId: movie._id});
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

module.exports = router;