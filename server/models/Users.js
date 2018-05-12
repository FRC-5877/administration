const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
  googleId: String,
  permissions: Number,
  lastLogin: Date,
  lastAction: String,
});

mongoose.connect('mongodb://192.1.1.33/team5877');

const Users = mongoose.model('Users', User);

module.exports = Users;
