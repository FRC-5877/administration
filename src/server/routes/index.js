var express = require('express');
var router = express.Router();
var path = require('path');
var publicVeiws = path.join(__dirname, '../../client/public/views');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(publicVeiws, 'index.html'));
});
router.get('/dashboard', function(req, res, next) {
  res.redirect('/');
});
router.get('/mail', function(req, res, next) {
  res.redirect('/');
});
router.get('/logout', function(req, res, next) {
  res.redirect('/');
});

module.exports = router;
