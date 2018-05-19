const mongoose = require('mongoose');
const argv = require('../argv');
const Schema = mongoose.Schema;

const Mail = new Schema({
  googleId: String,
  permissions: Number,
  lastLogin: Date,
  lastAction: String,
});

mongoose.connect(`mongodb://${argv.mongo || process.env.MONGO || 'localhost'}/team5877`);

const Mails = mongoose.model('Mail', Mail);

module.exports = Mails;
