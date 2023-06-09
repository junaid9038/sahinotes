const { model } = require('mongoose'); // own create
const User = require('../models/user');



module.exports.profile = function(req,res){
    return res.render('profile');
}

module.exports.signup = function(req,res){  // controller for sign up page 
    return res.render('signup');
}

module.exports.signin = function(req,res){  // controller for sign in page 
    return res.render('signin');
}

module.exports.create = (req, res) =>{
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var confirm_password = req.body.confirm_password;
    console.log(name, email, password, confirm_password);
    if (password==confirm_password) {
        // create new entry in the database
        User.create({
            name: name,
            email: email,
            password: password,
        }, function(err, user) {
            if (err) {
                console.log('Error in creating new user: ', err); return;
            }
            console.log(user);
        });
        return res.redirect('/users/signin');
    } else {
        console.log("password and confirm password are not same");
        return res.redirect('back');
    }
}

module.exports.logout = function(req,res){
    req.logout(function(err){
        return res.redirect('/users/signin');
    });

}

module.exports.createSession = (req,res) => {
    // var email = req.body.email;
    // var password = req.body.password;
    // User.findOne({email : email}, (err,user) => { 
    //     if (err) {
    //         console.log('Error in creating new user: ', err); return;
    //     }
    //     if(password == user.password){
    //         return res.redirect('users/profile');
    //     }else{
    //         console.log("your password is wrong");
    //         return res.redirect('back');
    //     }

    // } )

    return res.redirect('/users/profile');

}

