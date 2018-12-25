var express = require('express');
var app = express();
var db = require('./db');

var UserController = require('./user/UserController');
var TrainCompanyController = require('./trainCompany/TrainCompanyController');

app.use('/users', UserController);
app.use('/train-company', TrainCompanyController);

module.exports = app;