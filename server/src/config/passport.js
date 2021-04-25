const { Strategy: JwtStrategy } = require('passport-jwt');
const { ExtractJwt } = require('passport-jwt');
const mongoose = require('mongoose');

const SECRET_KEY = process.env.SECRET_OR_KEY;

const User = mongoose.model('User');

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SECRET_KEY;

module.exports = (passport) => {
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findById(jwtPayload.id)
        .then((user) => done(null, user || false))
        .catch((err) => console.error(err));
    }),
  );
};
