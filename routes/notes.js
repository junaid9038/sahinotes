const express = require('express');

const route = express.Router();

const notescontroller = require('../controller/notes_controller');
console.log(" notes router is working ");

route.get('/notes',notescontroller.notes);

module.exports = route;