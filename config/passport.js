const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//load the login claim
User = require('../models/Users');

module.exports = function(passport){
    passport.use(
        new localStrategy({usernameField: 'email'}, (email, password, done) => {
            //match user
            User.findOne({ email: email })
            .then((user)=> {
                if(!user){
                    return done(null, false, {message: 'Email is not Registered'});
                }

                //compare the password
                bcrypt.compare(password, user.password, (err, isMatch)=> {
                    if (err) {
                        throw err;
                    }

                    if(isMatch){
                        return done(null, user);
                    }else {
                        return done(null, false, {message:'Username or Password is incorrect'})
                    }
                });
            })
            .catch(err => console.log(err));
        })
    )
    passport.serializeUser((User, done)=> {
        done(null, user.id);
    });
    passport.deserializeUser((id, done)=> {
        User.findById(id, (err, user)=>{
            done(err, user);
        });
    });
}