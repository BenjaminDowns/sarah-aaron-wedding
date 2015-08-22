var express = require('express'),
  router = express.Router(),
  nodemailer = require('nodemailer'),
  config = require('config');


function sendmail(content) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.username,
      pass: config.password
    }
  });
  transporter.sendMail({
    from: 'benjamin.downs@gmail.com',
    to: 'benjamin.downs@gmail.com',
    subject: 'RSVP for Sarah and Aaron',
    text: content
  });
}



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: "Sarah and Aaron's Wedding Page"
  });
});

// GET details/registry page
router.get('/details', function(req, res, next) {
  res.render('details', {
    title: 'Events and Accommodations'
  });
});

// GET RSVP page
router.get('/RSVP', function(req, res, next) {
  res.render('RSVP', {
    title: 'RSVP'
  });
});

// RSVP response
router.post('/RSVP', function(req, res, next) {
  var firstName = req.body.name;
  var lastName = req.body.lastName;
  var story = req.body.story;
  var attendance = req.body.attendance;
  res.send("Thanks for RSVP'ing, " + req.body.name);
  // style this, and enable timeout function that redirects to registry/details
  sendmail(firstName + ' ' + lastName + " has just RSVP'd. \n\nTheir attendance status is " + attendance + "\n\nTheir submitted story is : \n\n\n" + req.body.story);
});


module.exports = router;