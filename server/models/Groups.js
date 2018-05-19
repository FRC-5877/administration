const mongoose = require('mongoose');
const argv = require('../argv');
const Schema = mongoose.Schema;

const Group = new Schema({
  name: String,
  color: String,
});

mongoose.connect(`mongodb://${argv.mongo || process.env.MONGO || 'localhost'}/team5877`);

const Groups = mongoose.model('Groups', Group);

module.exports = Groups;
