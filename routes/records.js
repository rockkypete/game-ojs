const express = require('express');
const router = express.Router();
const momgoose = require('mongoose');
const Game = require('../models/games');


//endpoints 
//game logic

router.get('/api/games', (req, res)=>{
    //logic for all games
    //Game.getGames
})


//player logic


module.exports = router;