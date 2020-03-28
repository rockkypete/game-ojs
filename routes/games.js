// import the gamescontrol module
const  RPS= require('../gameControl');
const express = require('express');
const router = express.Router();

//instantiate rps game
const rps = new RPS();

// logic handle for individual games
router.get('/compare', (req, res)=>{
    rps.compareImg();
    res.end(`${rps.output.hpImg}`)
})