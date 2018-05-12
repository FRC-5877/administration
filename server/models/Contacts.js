const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Contact = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  parent: Boolean,
  group: String,
});

mongoose.connect('mongodb://192.1.1.33/team5877');

const Contacts = mongoose.model('Contacts', Contact);

module.exports = Contacts;
