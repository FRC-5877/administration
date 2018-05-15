const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const settings = require('../../settings.json');

const Group = new Schema({
  name: String,
});

mongoose.connect(`mongodb://${settings.mongodb}/team5877`);

const Groups = mongoose.model('Groups', Group);

module.exports = Groups;
