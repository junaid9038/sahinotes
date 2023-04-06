const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user'); // use User that why require user model

passport.use(new LocalStrategy({
    usernameField:'email',
},
    function(email, password, done) {   // here username is email
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (password != user.password) { return done(null, false); }
        return done(null, user);
      });
    }
));

passport.serializeUser(function(user, done) {   //responce
    done(null, user.email);                    // find unique id  (here id is email) for cookie
});


passport.deserializeUser(function(email, done) {    //requiest
      User.findOne({email:email}, function(err, user) { // find unique id (here id is email) for cookie
          done(err, user);
    });  
});


passport.checkAuthentication = function(req,res,next){ // this is API specefic middlerware 
  if(req.isAuthenticated()){
    return next();
  }
  else{
    return res.redirect('/users/signin');
  }
}

passport.setAuthenticatedUser = function(req,res,next){ // this is universal middleware
  if(req.isAuthenticated()){
    res.locals.user = req.user;
    return next();
  }else{
    return next();
  }
}



  module.exports = passport;
