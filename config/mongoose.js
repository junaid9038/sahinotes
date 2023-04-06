const mongoose = require("mongoose");


mongoose.connect( 'mongodb://localhost/sahinotes_development',);// connect mongodb

mongoose.connection.once('open',function(){
    console.log('connected to mongodb database');
});

