const mongoose = require('mongoose');
const argv = require('../argv');
const Schema = mongoose.Schema;

const Contact = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  groups: Array,
});

mongoose.connect(`mongodb://${argv.mongo || process.env.MONGO || 'localhost'}/team5877`);

const Contacts = mongoose.model('Contacts', Contact);

module.exports = Contacts;
