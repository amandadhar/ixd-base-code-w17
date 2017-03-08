/**
 * Created by Liam on 2/22/2017.
 */
var Mongoose = require("mongoose");

var rideRequestSchema = new Mongoose.Schema({
    "name": String,
    "start": String,
    "end": String,
    "resolved": Boolean,
    "date": String,
    "options": {
        "bigBox": String,
        "smallBox": String,
        "tape": String,
        "twine": String,
        "bubblewrap": String,
        "tarp": String,
        "vehicle": String
    }
});

var userSchema = new Mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "home": String,
    "history": []
});

exports.rideRequest = Mongoose.model('rideRequest', rideRequestSchema);
exports.user = Mongoose.model('user', userSchema);