var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('../public/javascripts/db');


console.log('*****************************');
console.log('***       API READY       ***');
console.log('*****************************');



router.get('/orders', (req, res, next) => {
    console.log('orders');
    var if001 = require('./api/if001');
    if001.if001(req, res);
});


router.get('/orders/:id', (req, res, next) => {
    var if002 = require('./api/if002');
    if002.if002(req, res);
});


router.get('/perfumes', (req, res, next) => {
    var if003 = require('./api/if003');
    if003.if003(req, res);
});


module.exports = router;
