//Users schema

//Users defined function to call db methods
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    //bio, contact, records
    name:{
        type: string
    },
    games:{
        type: Array
    }
        
});



const Player = mongoose.model('Player', playerSchema);
module.exports = Player;

//model functions

module.exports.getPlayers = function(){

}

