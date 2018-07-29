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
})

module.exports = router;