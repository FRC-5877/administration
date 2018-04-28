var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var publicFolder = path.join(__dirname, '../client/public');
var settings = require(path.join(__dirname, '../../settings.js'));
const passport = require('passport');

var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api')
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var session = require('express-session');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(publicFolder));

app.use(session({
  secret: "administration",
  resave: true,
  saveUninitialized: true,
  cookie: { maxAge: 60000, secure: false }
}));
app.use(passport.initialize());
app.use(passport.session());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api', apiRouter);
app.use('/auth', authRouter);

module.exports = app;
