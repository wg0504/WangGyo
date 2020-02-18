var express = require('express');
var router = express.Router();
var path = require('path');
var mysql = require('../public/javascripts/db');


console.log('****************************');
console.log('***         READY        ***');
console.log('****************************');



router.post('/IF001', (req, res, next) => {
    var if001 = require('./api/if001');
    if001.if001(req, res);
});


router.post('/IF002', (req, res, next) => {
    var if002 = require('./api/if002');
    if002.if002(req, res);
});


router.post('/IF003', (req, res, next) => {
    var if003 = require('./api/if003');
    if003.if003(req, res);
});


module.exports = router;
