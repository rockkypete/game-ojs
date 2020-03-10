const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
    //bio, contact, records
    player: Array,
    required: true
});



const Players = mongoose.model('Player', PlayerSchema);

//model functions


