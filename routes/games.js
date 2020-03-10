// handles all game routes : board for listings
// rps for the rps game page
//blackjack for the black jack game page

const express = require('express');

const router = express.Router();

//board (game invites) logic
router.get('/boards', (req, res)=> {
    res.send({output: 'Here are the list of hosted games available'});
})

//rps game logic
router.get('/rps', (req, res)=> {
    res.render('rps', {title: `<title>Game-OJS | R-P-S</title>`});
})

//blackjack page logic
router.get('/blackjack', (req, res)=> {
    res.render('blackjack', {title: `<title>Game-OJS | BlackJack</title>`});
})
