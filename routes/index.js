const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


// homepage logic
router.get('/', (req, res)=> {
    res.render('home', {title: 'Game-OJS'});
    
});

//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res)=> {
    //let player = req.user;
    //render dashboard and the validated and authenthicated user from db
    res.render('dashboard', {
        title: 'Game-OJS | Register',
        name: req.user.name,
    });
})


module.exports = router;