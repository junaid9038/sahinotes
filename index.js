const express = require('express');

const app = express();

const expressEjsLayout = require('express-ejs-layouts'); // import express ejs layouts 
app.use(expressEjsLayout); // use express ejs layouts (call function)
require('./config/mongoose');// require mongoose 
const passport = require('passport');//
require('./config/passport-local-strategy');
const expressSession = require('express-session');
const mongoStore = require('connect-mongo');


app.use(express.urlencoded());

app.use(expressSession({
    name:'sahinotes',
    secret:'sahinotes_dev',
    cookie:{
        maxAge: 24*60*60*1000
    },
    store:mongoStore.create({
        mongoUrl:"mongodb://localhost/sahinotes_development"
    })
}));

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);//
app.use('/',require('./routes/index'));// import router 
app.set('layout extractStyles',true)

// view engine help rum ejs file 
app.set("view engine","ejs");
app.set("views","./view");
// acess for static file
app.use(express.static('./asset'));



app.listen(8000,function(err){
    if(err){ console.log('Error in the server ',err); return}

    console.log('sever is runing in 8000');
})

// clint id = 389455728903-e9r1tngivhbe8gir58cqgens6epq6398.apps.googleusercontent.com
// clint scret = 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