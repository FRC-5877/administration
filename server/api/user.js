const express = require('express');
const router = express.Router();
const Users = require('../models/Users');

router.get('/', (req, res) => {
  res.send('User API endpoint');
});

router.get('/validate', (req, res) => {
  const gid = req.query.gid;
  Users.findOne({ googleId: gid }, (err, user) => {
    if (!user) {
      Users.create({
        googleId: gid,
        permissions: 10,
        lastLogin: new Date(),
        lastAction: null,
      }).then((newUser) => {
        return res.status(200).json(newUser);
      });
    } else {
      return res.status(200).json(user);
    }
  });
});

module.exports = router;
