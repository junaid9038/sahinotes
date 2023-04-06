const express = require('express');

const route = express.Router();

const homecontroller = require('../controller/home_controller');


console.log(" route is runing ");
route.get('/',homecontroller.home);


 route.use("/notes",require("./notes"));
 route.use("/users",require('./users'));

module.exports = route;