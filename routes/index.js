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
    title: 'Event Details and Accommodations'
  });
});

// GET RSVP page
router.get('/RSVP', function(req, res, next) {
  res.render('RSVP', {
    title: 'RSVP'
  });
});

// GET ourstory page
router.get('/ourstory', function(req, res, next) {
  res.render('ourstory', {
    title: 'Our Story'
  });
});

// RSVP response
router.post('/RSVP', function(req, res, next) {
  var firstName = req.body.name;
  var lastName = req.body.lastName;
  var attendance = req.body.attendance;
  var quantity = req.body.quantity;
  var howYouKnow = req.body.howYouKnow;
  var howLong = req.body.howLong;
  var prediction = req.body.prediction;

  res.send("Thanks for RSVP'ing, " + req.body.name);
  res.render('index')
  console.log(req.body);
  // // style this, and enable timeout function that redirects to registry/details
  sendmail(firstName + " " + lastName + " has just RSVP'd. \n\nTheir RSVP response is " + attendance + "\n\nTheir total party number is: " + quantity + "\n\nThey know Sarah and/or Aaron because: \n\n" + howYouKnow + "\n\nThey've know them since: \n\n" + howLong + "\n\nTheir prediction is: \n\n" + prediction);
});


module.exports = router;