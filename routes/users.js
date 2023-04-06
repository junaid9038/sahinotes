const express = require("express");
const routes = express.Router();
var userController = require("../controller/user_controller");
console.log(userController);
const passport = require('passport');



routes.get("/profile",passport.checkAuthentication, userController.profile);
routes.get("/signin", userController.signin);
routes.get("/signup", userController.signup);
routes.post("/create", userController.create);
routes.post("/create_session",passport.authenticate('local',{failureRedirect :'/users/signin'}), userController.createSession);
routes.get("/logout",userController.logout);


module.exports = routes;