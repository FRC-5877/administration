const express = require('express');
const router = express.Router();
const Groups = require('../models/Groups');
const Users = require('../models/Users');

router.get('/', (req, res) => {
  res.send('Groups API endpoint');
});

router.get('/get', (req, res) => {
  const userId = req.query.uid;
  Users.findOne({ googleId: userId }, (findOneError, user) => {
    if (user.permissions < 10) {
      Groups.find({}, (findGroupsError, groups) => {
        return res.status(200).json(groups);
      });
    }
    return res.status(200);
  });
});

router.post('/add', (req, res) => {
  const userId = req.body.uid;
  const g = req.body.group;
  Users.findOne({ googleId: userId }, (findUserError, user) => {
    if (user.permissions < 10) {
      Groups.findOne({ name: g.name }, (findGroupError, group) => {
        if (!group) {
          Groups.create(g, (createGroupError, newGroup) => {
            return res.status(201).json(newGroup);
          });
        } else {
          return res.status(409).json({ error: 'Group with that Email already exists!' });
        }
      });
    } else {
      return res.status(403).json({ error: 'You don\'t have permission to add groups!' });
    }
  });
});

module.exports = router;
