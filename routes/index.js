const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');


// homepage logic
router.get('', (req, res)=> {
    res.writeHead(200, {contentType: 'text/html'});
    res.render('home');
});

//dashboard
router.get('/dashboard', ensureAuthenticated, (req, res)=> {
    //let player = req.user;
    //render dashboard and the validated and authenthicated user from db
    res.render('dashboard', {name: req.user.name,});
})

//board(games) listing

//store (asset listing)

//


module.exports = router;