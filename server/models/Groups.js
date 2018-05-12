const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Group = new Schema({
  name: String,
});

mongoose.connect('mongodb://192.1.1.33/team5877');

const Groups = mongoose.model('Groups', Group);

module.exports = Groups;
