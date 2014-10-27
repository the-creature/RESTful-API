//Dependencies
var express = require('express');
var router = express.Router();

//Models
var Product = require('../models/course'); 

//Routes
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/courses');

//Return Router
module.exports = router;
