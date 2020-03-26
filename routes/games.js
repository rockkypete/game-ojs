// import the gamescontrol module
const Game = require('../gameControl');
const express = require('express');
const router = express.Router();

//instantiate rps game
const rps = new rps();

// logic handle for individual games
router.get('/compare', (req, res)=>{
    rps.compareImg();
    res.end(`${rps.output.hpImg}`)
})