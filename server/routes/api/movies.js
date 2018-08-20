const express = require('express');
const router = express.Router();

// Import models
const modelsDir = '../../models/';
const Movie = require(`${modelsDir}Movie`);
const Person = require(`${modelsDir}Person`)

// @route   GET api/movies/test
// @desc    Test movies route
// @acces   Public
router.get('/test', (req, res) => res.json({msg: 'Movies works'}));

// @route   GET api/movies/test
// @desc    Register a new movie
// @query   forceCreation Create a new record even if there already is a movie with the same title.
// @acces   Private
router.post('/register', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { body = {}, query } = req;
    const { forceCreation = false } = query;

    Movie.findOne({ title: body.title })
        .then(movie => {
            if (!forceCreation && people && people.length) {
                errors.title = 'One or more movies with this title already exists';
                errors.matchedMovies = people;
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