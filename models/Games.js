const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    //bio, contact, records
    name:{
        type: string,
        required: true
    },
    genre:{
        type: string,
        required: true
    },
    description:{
        type: string,
        required: true
    },
    players:{
        type: array,
        required: true
    },
    wins:{
        type: integer,
    },
    loss:{
        type: integer,
    },
    draws:{
        type: integer,
    }
    
});



let Game = module.exports = mongoose.model('Game', gameSchema);

//model functions
//get games
module.exports.getGames = function(callback, limit){
    Game.find(callback).limit(limit);
}

//add a new game record
module.exports.addGame = function(game, callback){
    Game.create(game, callback);
}


//update a record
module.exports.updateGame = function(name, update, option, callback){
    let player = name;
    let update = {wins: wins, loss:loss, draws:draws} 
    Game.update(
        player, 
        {
            $set: {
                players:player,
                $inc:{update}
            }
        },
        option,
        callback
    )
}

//delete a record
module.export.deleteGame = function(name, callback){
    let query = {name:name}
    Game.remove(query, callback);
}