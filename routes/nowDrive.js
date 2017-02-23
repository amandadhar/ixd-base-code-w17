/**
 * Created by Liam on 2/16/2017.
 */
var models = require("../models");

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
        "distance": info.distance,
        "pic": info.pic,
        "resolved": false
    });
    newRide.save(afterSave);
    function afterSave(err) {
        if(err) { console.log(err); res.send(500); }
        res.end();
    }
};