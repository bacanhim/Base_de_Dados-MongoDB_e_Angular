var express = require('express'),
    router = express.Router(),
    historia = require('../models/historia'),
    mongoose = require('mongoose');

router.get("/", function (req, res) {
    historia.find({}, function (err, data) {
        if (err) {
            res.send("error");
            return;
        }
        res.send(data)
    });
});
router.get("/:id", function (req, res) {
    var id = req.params.id;
    historia.findOne({_id: id}).populate("pessoa").exec(function (err, data) {
        if (err) return res.send(err);
        res.send(data);
    });
});

module.exports = router;