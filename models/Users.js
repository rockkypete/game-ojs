//Users schema

//Users defined function to call db methods
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //bio, contact, records
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});



const Users = mongoose.model('User', UserSchema);

//model functions




module.exports = Users;