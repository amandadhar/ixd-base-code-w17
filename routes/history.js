/**
 * Created by Liam on 2/9/2017.
 */
var models = require("../models");
var userInfo = require("../userInfo.json");

exports.view = function(req, res){
    models.rideRequest
        .find({_id: userInfo.currentUser})
        .exec(updateStatus);
    function updateStatus(err, users) {
        if (err) {console.log(err); res.send(500);}
        if(users && users[0]) {
            var hist = users[0].history;
        }
        userInfo.history = hist;
    }
    console.log(userInfo.history);
    res.render('history', userInfo);
};