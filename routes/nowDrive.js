/**
 * Created by Liam on 2/16/2017.
 */
var models = require("../models");
var picked = require("../accepted.json");

exports.view = function(req, res) {
    models.rideRequest
        .find({"resolved": false})
        .exec(displayRides);
    function displayRides(err, rides) {
        if(err) { console.log(err); res.send(500); }
        //console.log(rides);
        res.render('nowDrive', { 'rides': rides });
    }

};

exports.addRide = function(req, res) {
    var info = req.body;
    var newRide = new models.rideRequest({
        "name": info.name,
        "start": info.start,
        "end": info.end,
        "resolved": false,
        "date": new Date().toLocaleString(),
        "vehicle": info.vehicle,
        "options": info.options
    });
    newRide.save(afterSave);
    function afterSave(err) {
        if(err) { console.log(err); res.send(500); }
        res.send(newRide._id);
    }
};

exports.pickup = function(req, res) {
    res.render('nowDriveAccepted', picked);
};