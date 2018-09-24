var express = require('express');
var router = express.Router();
var models = require('../models/index');

router.post('/student', function(req, res) {
  models.Student.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
  }).then(function(user) {
    res.json(user);
  });
});

// get all students
router.get('/students', function(req, res) {
  models.Student.findAll({}).then(function(todos) {
    res.json(todos);
  });
});

module.exports = router;
