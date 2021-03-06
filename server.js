'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var jwt        = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const app  = express();
const PORT = process.env.NODE_PORT || 3000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
require('./app/routes/index')(app);
require('./app/model/signup.js');
app.listen(PORT, () => console.log('Server Is Listening At PORT %d', PORT))