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
// @desc    Test movies route
// @acces   Public
router.post('/register', (req, res) => {
    const { body = {} } = req;
    Movie.findOne({ title: body.title })
        .then(movie => {
            if (movie) {
                return res.status(400).json({ title: 'A movie with this title already exists'});
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