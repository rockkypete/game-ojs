//app entry point: server

//import modules/libraries

const express = require('express');
const flash = require('connect-flash');
const session = require('express-session');
const expressLayout = require('express-ejs-layouts');
const mongoose = require('mongoose');
const passport = require('passport');

//initialize the server
const app = express();


//database connection
/*mongoose.connect('mongodb://localhost/gamestation');
const db = mongoose.connection;
*/
db = require('./config/keys').MONGO_URI;
mongoose.connect(db, { useNewUrlParser: true })
    .then(()=> console.log('Mongodb connected...'))
    .catch(err=> console.log(err));

//passport config
require('./config/passport')(passport);



//middleware
//EJS
app.use(expressLayout);
app.set('view engine', 'ejs');

//express-parser(body parser)
app.use(express.urlencoded({extended:false}));

//express-flash and connect flash
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());


//global variables(custom middleware)
app.use((req, res, next) =>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
})

//re-routes
app.use('/', require('./routes/index'));

//user-based page request
app.use('/users', require('./routes/users'));





const port = process.env.PORT || 7000;

app.listen(port, ()=>{
    console.log(`Server is now running on port ${ port }`);
})
