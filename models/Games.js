const mongoose = require('mongoose');

const GameSchema = new mongoose.Schema({
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
    activePlayers:{
        type: Array,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});



const Games = mongoose.model('Game', GameSchema);

//model functions


