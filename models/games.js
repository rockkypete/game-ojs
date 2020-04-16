//Users schema

//Users defined function to call db methods
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    players:{
        type: Array
    },
    games:{
        type: Array
    }
});



const Game = mongoose.model('Game', gameSchema);
module.exports = Game;

//model functions



