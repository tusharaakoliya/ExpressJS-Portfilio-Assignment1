var express = require('express');
var router = express.Router();
const Contact = require('../model/contact');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'My Portfolio' });
});


// GET Projects page
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'My Projects' })
});

// GET about me page
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About Me' })
});


// GET about me page
router.get('/add', function(req, res, next) {
  res.render('add', { title: 'Send a message' })
});


router.post('/add', (req, res, next) => {
  Contact.create({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message
  },
  (err, newContact) => {
      if(err) {console.lod(err);}
      else {
          res.redirect('/contact'); // sucess
      }
  });
});
// GET about me page
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' })
});


module.exports = router;
