const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

User = require('../models/Users');



//registration handle
router.get('/register', (req, res)=> {
    //render register ejs
    res.render('register', {title: 'Game-OJS | Register'});
})

router.post('/register', (req, res)=> {
    //destructure the form data
    const { name, email, password, password2 } = req.body;
    
    //use if..else conditional to validate form data
    let errors = [];
    //check if all fields a re field
    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill all fields'})
    }
    //check if password match
    if(password !== password2){
        errors.push({msg:'Passwords do not match'})
    }
    //check for password length
    if(password.length < 6){
        errors.push({msg:'Password needs to be at least 6 characters'})
    }
    //check for errors before rendering
    if(errors.length > 0){
        res.render('register', {
            errors,
            name,
            email,
            password,
            password2
        })
    }else{
        //validation passed. Update the db and render dashboard
        User.findOne({ email: email }, (err, user))
        .then((user)=>{
            //matching record exist. update errors and re-render registration
            if (user){
                errors.push({msg:'Email has been registered'});
                res.render('register', {errors, name, email, password, password2});
            }else{
                //no existing record. encrypt password with bcrypt 
                //create instance of User model(new record)
                newUser = new User({name, email, password})
                console.log(newUser);
                //generate salt for hashing
                bcrypt.gensalt(10, (err, salt))
                .then((salt)=>{
                    bcrypt.hash(newUser.password, salt, (err, hash)=>{
                        if(err) {
                            throw err;
                        }
                        //set password to hashed
                        newUser.password = hash;
                        //save new user
                        newUser.save().then((user)=> {
                            req.flash('sucess_msg', 'Registration was successfully. log in here')
                            res.re-direct('/users/login');
                        })
                    })
                })
                .catch(err=> console.log(err));          
            }
        })
        .catch(err => console.log(err));
    }  
})


//login handle
router.get('/login', (req, res)=> {
    //render login ejs
    res.render('login', {title: 'Game-OJS | Login'});
})

router.post('/login', (req, res, next)=> {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    }) (req, res, next);
})

//logout handle
router.get('/logout', (req, res)=> {
    req.logout();
    req.flash('success_msg', 'You are now logged out')
    res.redirect('/users/login');
})



module.exports = router;

/*possible routes : endpoints (users)
/profile
/dashboard - render the dashboard if correctly signed in (protect page)
/messages - query currently looged in user's messages
/admin - request for adminstrator log in
/logout -render signin page

*/
