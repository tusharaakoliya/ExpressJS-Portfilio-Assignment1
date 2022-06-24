var express = require('express');
var router = express.Router();

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
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact Me' })
});


module.exports = router;
