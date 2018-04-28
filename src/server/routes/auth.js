const express = require('express');
const router = express.Router();
const passport = require('passport');
const path = require('path');
const settings = require(path.join(__dirname, '../../../settings.js'));
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

const Users = require('../modules/Users');
const users = new Users();

passport.use(new GoogleStrategy({
  clientID: settings.auth.google.clientID,
  clientSecret: settings.auth.google.clientSecret,
  callbackURL: "http://localhost:3000/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  users.addUser(profile.name, profile.emails[0].value).then(user => {
    return done(null, user);
  }).catch(e => {
    return done(e);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  users.findByID(id).then(user => {
    done(null, user);
  });
});

router.get('/google', passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login','https://www.googleapis.com/auth/userinfo.email'] }));

router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res, next) => {
  res.cookie('user', req.user._id, {maxAge: 1*60*60*1000}).redirect('/');
});

module.exports = router;
