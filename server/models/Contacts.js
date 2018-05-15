const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const settings = require('../../settings.json');

const Contact = new Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  parent: Boolean,
  group: String,
});

mongoose.connect(`mongodb://${settings.mongodb}/team5877`);

const Contacts = mongoose.model('Contacts', Contact);

module.exports = Contacts;
