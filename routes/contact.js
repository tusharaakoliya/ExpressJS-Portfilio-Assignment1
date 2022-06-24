const express = require('express');
const contact = require('../model/contact');
const router = express.Router();
const Contact = require('../model/contact');


// GET about me page
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact Me' })
  });

// post 

router.post('/contact', (req, res, next) => {
    Contact.create({
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    },
    (err, newContact) => {
        if(err) {console.lod(err);}
        else {
            res.redirect('/contact');
        }
    });
});

module.exports = router