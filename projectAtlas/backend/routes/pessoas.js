var express = require('express'),
    router = express.Router(),
    pessoa = require('../models/pessoa.js'),
    mongoose = require('mongoose');
router.get('/', function (req, res) {
    pessoa.find({}, function (err, data) {
        if (err) {
            res.send('error');
            return;
        }
        res.send(data);
    });
});
module.exports = router;
