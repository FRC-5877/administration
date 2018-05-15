const express = require('express');
const router = express.Router();
const Contacts = require('../models/Contacts');
const Users = require('../models/Users');

router.get('/', (req, res) => {
  res.send('Contacts API endpoint');
});

router.get('/get', (req, res) => {
  const userId = req.query.uid;
  Users.findOne({ googleId: userId }, (findOneError, user) => {
    if (user.permissions < 10) {
      Contacts.find({}, (findContactsError, contacts) => {
        return res.status(200).json(contacts);
      });
    }
    return res.status(200);
  });
});

router.post('/add', (req, res) => {
  const userId = req.body.uid;
  const c = req.body.contact;
  Users.findOne({ googleId: userId }, (findUserError, user) => {
    if (user.permissions < 10) {
      Contacts.findOne({ email: c.email }, (findContactError, contact) => {
        if (!contact) {
          Contacts.create(c, (createContactError, newContact) => {
            return res.status(201).json(newContact);
          });
        } else {
          return res.status(409).json({ error: 'Contact with that Email already exists!' });
        }
      });
    } else {
      return res.status(403).json({ error: 'You don\'t have permission to add contacts!' });
    }
  });
});

router.post('/edit', (req, res) => {
  const userId = req.body.uid;
  const c = req.body.contact;
  Users.findOne({ googleId: userId }, (findUserError, user) => {
    if (user.permissions < 10) {
      Contacts.updateOne({ email: c.email }, c, (updateContactError, newContact) => {
        if (!newContact) {
          return res.status(409).json({ error: 'That contact does not exist' });
        } else {
          return res.status(201).json(newContact);
        }
      });
    } else {
      return res.status(403).json({ error: 'You do not have permission to add contacts!' });
    }
  });
});

module.exports = router;
