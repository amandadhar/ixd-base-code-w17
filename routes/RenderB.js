/**
 * Created by Liam on 3/7/2017.
 */
var models = require("../models");
var picked = require("../accepted.json");

exports.login = function(req, res) {
    res.render('B/loginB', { "status": "warningHidden" });
};

exports.register = function(req, res) {
    res.render('B/registerB', { "status": "warningHidden" });
};

exports.index = function(req, res) {
    res.render('B/indexB');
};

exports.request = function(req, res) {
    res.render('B/designB');
};

exports.waiting = function(req, res) {
    res.render('B/nowRideWaitingB');
};

exports.pickup = function(req, res) {
    res.render('B/pickupB', picked);
};

//Omnibar
exports.settings = function(req, res) {
    res.render('B/settingsB');
};
exports.history = function(req, res) {
    res.render('B/historyB');
};
exports.help = function(req, res) {
    res.render('B/helpB');
};

//Longer functions at the bottom


exports.drive = function(req, res) {
    models.rideRequest
        .find({"resolved": false})
        .exec(displayRides);
    function displayRides(err, rides) {
        if(err) { console.log(err); res.send(500); }
        //console.log(rides);
        res.render('B/nowDriveB', { 'rides': rides });
    }

};

exports.createUser = function(req, res) {
    var info = req.body;

    //See if user registered with an already-registered email
    models.user
        .find({"email": info.email})
        .exec(badEmail);

    function badEmail(err, users) {
        if(err) { console.log(err); res.send(500); }
        console.log(users);
        console.log(users.length);
        if(users.length != 0) {
            res.render('B/registerB', { "status": "warningShow" });
        } else {
            var newUser = new models.user({
                "name": info.name,
                "email": info.email,
                "password": info.password,
                "home": "None Set!",
                "history": []
            });
            newUser.save(addNewUser);
        }
    }

    function addNewUser(err) {
        if(err) { console.log(err); res.send(500); }
        res.end();
    }
};
