/**
 * Created by Liam on 2/16/2017.
 */
var rideList = require('../riderlist.json');

exports.view = function(req, res) {
    res.render('nowDrive', rideList);
};

exports.addRide = function(req, res) {
    //console.log(req.body);
    rideList.rides.push(req.body);
    res.end();
};