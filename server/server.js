const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const movies = require('./routes/api/movies');

const app = express();

// BodyParser middleware
app.use(bodyParser.urlencoded({expanded: false}));
app.use(bodyParser.json());

// DB config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/movies', movies);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));