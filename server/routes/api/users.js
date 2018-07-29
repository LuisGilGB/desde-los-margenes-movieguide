const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Import models
const modelsDir = '../../models/';
const User = require(`${modelsDir}User`);

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'User works'}));

// @route   POST api/users/register
// @desc    Register user
// @access  Public
router.post('/register', (req, res) => {
    const { body = {} } = req;
    User.findOne({ email: body.email })
        .then(user => {
            if (user) {
                return res.status(400).json({ email: 'An user with this email already exists' });
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
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(404).json({ email: 'User not found'});
            }

            // Check password
            bcrypt.compare(password, user.password)
                .then(isMatch => {
                    if (isMatch) {
                        res.json({ msg: 'Success' });
                    } else {
                        return res.status(400).json({ password: 'Wrong password' });
                    }
                })
                .catch(err => console.log(err));
        })
        .catch(err => console.log(err));
});

module.exports = router;