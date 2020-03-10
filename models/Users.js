//Users schema

//Users defined function to call db methods
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    //bio, contact, records
    name:{
        type: string,
        required: true
    },
    email:{
        type: string,
        required: true
    },
    password:{
        type: string,
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