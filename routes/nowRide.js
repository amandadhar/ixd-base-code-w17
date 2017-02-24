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

exports.check = function(req, res) {
    var request = userInfo.currentRequest;
    models.rideRequest
        .find({_id: request})
        .exec(evalStatus);
    function evalStatus(err, found) {
        if(err) { console.log(err); res.send(500); }
        if(found.length != 0) {
            if(found[0].resolved == true) {
                userInfo.history.push(found[0]);
                userInfo.currentRequest = "";
                found[0].remove();
                res.send("some");
            }
        } else {
            res.send("none");
        }
    }
};

exports.accepted = function(req, res) {
  res.render("nowRideAccepted");
};