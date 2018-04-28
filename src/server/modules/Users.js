const mongoose = require('mongoose');
mongoose.connect('mongodb://192.1.1.33/team5877');
var Promise = require('promise');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    name: {
      familyName: String,
      givenName: String
    },
    email: {type: String, unique: true, required: true},
    date: {type: Date, default: Date.now},
    role: {type: Number, min: 0, default: 1}
  });

const UserModel = mongoose.model('Users', UserSchema);

class Users {

  constructor() {
  }

  findByEmail(email) {
    UserModel.findOne({'email': email}, (err, user) => {
      console.log(err || user);
    });
  }

  addUser(name, email, role = 1) {
    return new Promise((resolve, reject) => {
      UserModel.findOne({email: email}, (err, user) => {
        if(err)
          reject(err);
          
        if(!user) {
          UserModel.create({name: name, email: email, role: role}, (err, newUser) => {
            if(err)
              reject(err);
            
            resolve(newUser);
          });
        } else {
          resolve(user);
        }
      });
    });
  }

  findByID(id) {
    return new Promise((resolve, reject) => {
      UserModel.findById(id, (err, user) => {
        if(err) reject(err);
  
        resolve(user);
      });
    });
  }
}

module.exports = Users;