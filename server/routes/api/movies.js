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
    const newMovie = new Movie({
        title           : req.body.title,
        originalTitle   : req.body.originalTitle,
        description     : req.body.description,
        year            : req.body.year,
        minutesLength   : req.body.minutesLength
    });

    newMovie.save()
        .then(movie => res.json(movie))
        .catch(err => console.log(err));
})

module.exports = router;