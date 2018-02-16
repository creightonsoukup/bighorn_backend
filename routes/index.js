const express = require('express');
const router = express.Router();
const queries = require('../database/queries');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/signups', function (req, res, next) {
  queries.createSignup(req.body.firstName, req.body.lastName, req.body.email)
    .then((data) => res.send(data))
    .catch((error) => next(error))
});

router.post('/contact_broker', function (req, res, next) {
  queries.contactBroker(req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.message)
    .then((data) => res.send(data))
    .catch((error) => next(error))
});

module.exports = router
