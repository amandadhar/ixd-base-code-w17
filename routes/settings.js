/**
 * Created by Liam on 2/9/2017.
 */
var models = require("../models");
var userInfo = require("../userInfo.json");

exports.view = function(req, res){
    res.render('settings', userInfo);
};

exports.update = function(req, res) {
    var info = req.body;
    console.log(info);
    //if the update is a name change, save the new name and return to the page
    if(info.name) {
        models.user
            .find({_id: info.id })
            .exec(saveName);
        function saveName(err, users) {
            if(err) { console.log(err); res.send(500); }
            var user = users[0];
            console.log(user);
            user.name = info.name;
            user.save(saveAndReturn);
            function saveAndReturn(err) {
                if(err) { console.log(err); res.send(500); }
                res.end();
            }
        }
    } else if(info.home) {
        models.user
            .find({_id: info.id })
            .exec(saveHome);
        function saveHome(err, users) {
            if(err) { console.log(err); res.send(500); }
            var user = users[0];
            user.home = info.home;
            user.save(saveAndReturn);
            function saveAndReturn(err) {
                if(err) { console.log(err); res.send(500); }
                res.end();
            }
        }
    }


};