/**
 * Created by Liam on 2/22/2017.
 */
var Mongoose = require("mongoose");

var rideRequestSchema = new Mongoose.Schema({
    "name": String,
    "start": String,
    "end": String,
    "distance": Number,
    "pic": String,
    "resolved": Boolean
});

var userSchema = new Mongoose.Schema({
    "name": String,
    "email": String,
    "password": String,
    "home": String
});

exports.rideRequest = Mongoose.model('rideRequest', rideRequestSchema);
exports.user = Mongoose.model('user', userSchema);