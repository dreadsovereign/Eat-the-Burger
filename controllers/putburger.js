var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;
  console.log(req);

  burger.updateOne({
    devoured: true
  }, condition, function(data) {
    res.redirect('/');
  });
});

module.exports = router;
