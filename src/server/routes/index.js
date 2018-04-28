var express = require('express');
var router = express.Router();
var path = require('path');
var publicVeiws = path.join(__dirname, '../../client/public/views');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(publicVeiws, 'index.html'));
});

module.exports = router;
