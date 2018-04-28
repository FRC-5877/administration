const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const publicFolder = path.join(__dirname, '../client/public');
const settings = require(path.join(__dirname, '../../settings.js'));
const passport = require('passport');
const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api')
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth');
const session = require('express-session');
const socketsio = require('socket.io');

const app = express();
const sockets = socketsio();
app.io = sockets;

const Users = require('./modules/Users');
const users = new Users();
app.users = users;

const io = require('./modules/io')(app);
const http = require('http').Server(app);


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
