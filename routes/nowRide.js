/**
 * Created by Liam on 2/16/2017.
 */
var models = require("../models");
var pickup = require("../accepted.json");

exports.view = function(req, res) {
    res.render('A/nowRide');
};

exports.next = function(req, res) {
    var info = req.body;
    console.log(info);
    res.render('A/nowRide', info);
};

exports.submitted = function(req, res) {
    res.render('A/nowRideWaiting');
};

exports.accept = function(req, res) {
    var rideId = req.body.id;
    models.rideRequest
        .find({_id: rideId})
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
    var rideId = req.body.rideId;
    var userId = req.body.userId;
    //find the ride being accepted using rideRequest ID
    models.rideRequest
        .find({_id: rideId})
        .exec(evalStatus);
    function evalStatus(err, found) {
        if(err) { console.log(err); res.send(500); }
        //if the rideRequest ID returns a real resolved ride, find the associated User and add it to their history.
        if(found && found.length != 0) {
            if(found[0].resolved == true) {
                models.user
                    .find({_id: userId})
                    .exec(finish);
                function finish(err, users) {
                    if(err) { console.log(err); res.send(500); }
                    if(users && users[0]) {
                        users[0].history.push(found[0]);
                        users[0].save(andExit);
                        function andExit(err) {
                            if(err) {console.log(err); res.send(500);}
                            found[0].remove();
                            res.send("some");
                        }
                    }
                }
            } else {
                res.send("none");
            }
        } else {
            res.send("none");
        }
    }
};

exports.accepted = function(req, res) {
  res.render("A/nowRideAccepted");
};

exports.getInfo = function(req, res) {
    var info = req.body;
    var userId = info._id;
    models.user
        .find({_id: userId})
        .exec(returnInfo);
    function returnInfo(err, found) {
        if(err) { console.log(err); res.send(500); }
        if(found[0]) {
            res.send(found[0]);
        }
    }
};

exports.deleteRide = function(req, res) {
    var rideId = req.body.id;
    models.rideRequest
        .find({_id: rideId})
        .exec(deleteRide);
    function deleteRide(err, found) {
        if(err) { console.log(err); res.send(500); }
        if(found[0]) {
            found[0].remove();
        }
        res.end();
    }
};