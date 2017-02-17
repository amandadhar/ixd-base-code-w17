/**
 * Created by Liam on 2/16/2017.
 */
var rideList = require('../riderlist.json');

exports.view = function(req, res) {
    /*
    var newRide = {
        name: req.query.name,
        start: req.query.start,
        end: req.query.end,
        distance: (Math.round(Math.random() * 20)) / 10,
        pic: "http://lorempixel.com/400/400/people"
    };

    rideList.rides.push(newRide);
    */
    res.render('nowRide', rideList);
};

exports.submitted = function(req, res) {
    res.render('nowRideWaiting');
};