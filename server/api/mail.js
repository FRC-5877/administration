/* eslint consistent-return: 0 */
/* eslint arrow-body-style: 0 */
/* eslint no-else-return: 0 */
const express = require('express');
const router = express.Router();
const Users = require('../models/Users');
const sendmail = require('sendmail')();

router.get('/', (req, res) => {
  res.send('Mail API endpoint');
});

router.post('/send', (req, res) => {
  Users.findOne({ googleId: req.body.uid }, (err, user) => {
    if (user && user.permissions < 10) {
      sendmail({
        from: 'no-reply@team5877.com',
        to: 'doug@team5877.com',
        subject: req.body.subject,
        html: req.body.body,
      }, (sendMailErr, reply) => {
        console.log(sendMailErr && sendMailErr.stack);
        console.dir(reply);
        return res.status(200);
      });
    } else {
      return res.status(403).json({ error: 'You do not have permission to send mail!' });
    }
  });
});

module.exports = router;
