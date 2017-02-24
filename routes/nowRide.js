/**
 * Created by Liam on 2/16/2017.
 */
var userInfo = require('../userInfo.json');
var models = require("../models");
var pickup = require("../accepted.json");

exports.view = function(req, res) {
    res.render('nowRide', userInfo);
};

exports.submitted = function(req, res) {
    res.render('nowRideWaiting');
};

exports.accept = function(req, res) {
    var info = req.body;
    models.rideRequest
        .find({_id: info.id})
        .exec(updateStatus);
    function updateStatus(err, rides) {
        if(err) { console.log(err); res.send(500); }

        rides[0].resolved = true;
        rides[0].save(finishAndReturn);

        function finishAndReturn(err) {
            if(err) { console.log(err); res.send(500); }
            pickup.accepted.push(rides[0]);
            res.end();
        }
    }
};