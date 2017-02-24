/**
 * Created by Liam on 2/16/2017.
 */
var rideList = require('../userInfo.json');

exports.view = function(req, res) {
    res.render('nowRide', rideList);
};

exports.submitted = function(req, res) {
    res.render('nowRideWaiting');
};