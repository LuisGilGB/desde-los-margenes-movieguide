const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const countriesRoutes = require('./routes/api/countries');
const peopleRoutes = require('./routes/api/people');
const moviesRoutes = require('./routes/api/movies');
const usersRoutes = require('./routes/api/users');

const bffPeopleRoutes = require('./routes/bff-api/people');
const bffMoviesRoutes = require('./routes/bff-api/movies');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// DB config
const DB = process.env.MONGO_URI;

// Connect to MongoDB
mongoose
	.connect(DB)
	.then(() => console.log('MongoDB connected'))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/countries', countriesRoutes);
app.use('/api/people', peopleRoutes);
app.use('/api/movies', moviesRoutes);
app.use('/api/users', usersRoutes);
// Use BFF Routes
app.use('/bff/people', bffPeopleRoutes);
app.use('/bff/movies', bffMoviesRoutes);

// Port
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));