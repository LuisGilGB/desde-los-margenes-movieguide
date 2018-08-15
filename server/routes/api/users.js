const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Import models
const modelsDir = '../../models/';
const User = require(`${modelsDir}User`);

// Load input Validation
const validateRegisterInput = require('../../validation/user/register');
const validateLoginInput = require('../../validation/user/login');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'User works'}));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const { body = {} } = req;
    console.log(body);
    const { errors, isValid } = validateRegisterInput(body);

    if (!isValid) {
        return res.status(400).json({ errors });
    }

    User.findOne({ email: body.email })
        .then(user => {
            if (user) {
                errors.email = 'An user with this email already exists';
                return res.status(400).json({ errors });
            } else {
                const newUser = new User({
                    name: body.name,
                    email: body.email,
                    password:body.password
                });

                // We create a hash to save the password encrypted.
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) {
                            throw err;
                        }
                        // Override the new user password with the generated hash.
                        newUser.password = hash;
                        // Save the new user into the database and return it as the service response.
                        newUser.save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });

            }
        })
        .catch(err => console.log(err));
});

// @route   POST api/users/login
// @desc    Login the user and returns a JWT Token.
// @access  Public
router.post('/login', (req, res) => {
    const { body = {} } = req;
    const { email, password } = body;
    const { errors, isValid } = validateLoginInput(body);

    if (!isValid) {
        return res.status(400).json({ errors });
    }

    User.findOne({ email })
        .then(user => {
            if (!user) {
                errors.email = 'User not found';
                return res.status(404).json(errors);
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name
                        }

                        jwt.sign(
                            payload,
                            keys.secretOrKey,
                            { expiresIn: 3600 },
                            () => {
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                        );
                    } else {
                        errors.password = 'Wrong password'
                        return res.status(400).json(errors);
                    }
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

// @route   GET api/users/current
// @desc    Returns the current user
// @access  Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
    const { user } = req;
    res.json({
        id: user.id,
        name: user.name,
        email: user.email
    });
});

module.exports = router;