const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    //bio, contact, records
    name:{
        type: string,
        required: true
    },
    wins:{
        type: integer,
        required: true
    },
    loss:{
        type: integer,
        required: true
    },
    draws:{
        type: integer,
        required: true
    }
});



const Players = mongoose.model('Player', PlayerSchema);

//model functions


