const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const settings = require('../../settings.json');

const User = new Schema({
  googleId: String,
  permissions: Number,
  lastLogin: Date,
  lastAction: String,
});

mongoose.connect(`mongodb://${settings.mongodb}/team5877`);

const Users = mongoose.model('Users', User);

module.exports = Users;
