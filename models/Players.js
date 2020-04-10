const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    
    name:{
        type: String,
        required: true
    },
    wins:{
        type: Number,
    },
    loss:{
        type: Number,
    },
    draws:{
        type: Number,
    }
});



const Player = module.exports =  mongoose.model('Player', playerSchema);

//model functions
//get players
module.exports.getPlayers = function(callback, limit){
    Player.find(callback).limit(limit);
}

//add a new player record
module.exports.addPlayer = function(player, callback){
    Player.create(player, callback);
}


//update a record
module.exports.updatePlayer = function(name, update, option, callback){
    let playerName = name;
    let update = {wins: wins, loss:loss, draws:draws} 
    Player.update(
        playerName, 
        {
            $set: {
                $inc:{update}
            }
        },
        option,
        callback
    )
}

//delete a record
module.export.deletePlayer = function(name, callback){
    let query = {name:name}
    Player.remove(query, callback);
}

