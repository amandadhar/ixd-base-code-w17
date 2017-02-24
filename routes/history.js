/**
 * Created by Liam on 2/9/2017.
 */

var userInfo = require("../userInfo.json");

exports.view = function(req, res){
    res.render('history');
};

exports.initialize = function(req, res) {
    userInfo.history[0].date = new Date();
};