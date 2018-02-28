const express = require('express');
const router = express.Router();
const queries = require('../database/queries');
const https = require('https');
const querystring = require('querystring');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/signups', function (req, res, next) {
  var postData = querystring.stringify({
    'email': req.body.email,
    'firstname': req.body.firstName,
    'lastname': req.body.lastName,
    'lifecyclestage': 'subscriber',
    'hs_context': JSON.stringify({
        "hutk": req.cookies.hubspotutk,
        "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        "pageUrl": req.headers.referer,
        "pageName": "Sign Up"
      })
  });
  var options = {
	   hostname: 'forms.hubspot.com',
	   path: '/uploads/form/v2/9eb1fd4a-050a-45ec-946e-64fa6927ecf9',
	   method: 'POST',
	   headers: {
		     'Content-Type': 'application/x-www-form-urlencoded',
		     'Content-Length': postData.length
	   }
   }

   var request = https.request(options, function(response){
	    console.log("Status: " + response.statusCode);
	    console.log("Headers: " + JSON.stringify(response.headers));
	    response.setEncoding('utf8');
	    response.on('data', function(chunk){
		      console.log('Body: ' + chunk)
	    });
  });

  request.on('error', function(e){
	   console.log("Problem with request " + e.message)
  });

  request.write(postData);
  request.end();

  queries.createSignup(req.body.firstName, req.body.lastName, req.body.email)
    .then((data) => res.send(data))
    .catch((error) => next(error))
});

router.post('/contact_broker', function (req, res, next) {
  var postData = querystring.stringify({
    'email': req.body.email,
    'firstname': req.body.firstName,
    'lastname': req.body.lastName,
    'phone': req.body.phone,
    'message': req.body.message,
    'hs_context': JSON.stringify({
        "hutk": req.cookies.hubspotutk,
        "ipAddress": req.headers['x-forwarded-for'] || req.connection.remoteAddress,
        "pageUrl": req.headers.referer,
        "pageName": "Contact Broker"
      })
  });
  var options = {
	   hostname: 'forms.hubspot.com',
	   path: '/uploads/form/v2/4076075/841e80fb-9000-4697-8cd7-450c6ad21efc',
	   method: 'POST',
	   headers: {
		     'Content-Type': 'application/x-www-form-urlencoded',
		     'Content-Length': postData.length
	   }
   }

   var request = https.request(options, function(response){
	    console.log("Status: " + response.statusCode);
	    console.log("Headers: " + JSON.stringify(response.headers));
	    response.setEncoding('utf8');
	    response.on('data', function(chunk){
		      console.log('Body: ' + chunk)
	    });
  });

  request.on('error', function(e){
	   console.log("Problem with request " + e.message)
  });

  request.write(postData);
  request.end();
  queries.contactBroker(req.body.firstName, req.body.lastName, req.body.email, req.body.phone, req.body.message)
    .then((data) => res.send(data))
    .catch((error) => next(error))
});

module.exports = router
