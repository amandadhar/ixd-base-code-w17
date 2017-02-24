var models = require("../models");
var userInfo = require("../userInfo.json");
// Login screen
exports.view = function(req, res){
    res.render('login', { "status": "warningHidden" });
};

exports.register = function(req, res) {
    res.render('register', { "status": "warningHidden" });
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
            res.render('register', { "status": "warningShow" });
        } else {
            var newUser = new models.user({
                "name": info.name,
                "email": info.email,
                "password": info.password,
                "home": ""
            });
            userInfo.name = newUser.name;
            newUser.save(addNewUser);
        }
    }

    function addNewUser(err) {
        if(err) { console.log(err); res.send(500); }
        res.end();
    }
};

exports.login = function(req, res) {
    var info = req.body;
    models.user
        .find({"email": info.email})
        .exec(checkPassword);
    function checkPassword(err, users) {
        if(err) { console.log(err); res.send(500); }
        if(users[0]) {
            if(users[0].password != info.password) {
                res.send("bad");
            } else {
                userInfo.name = users[0].name;
                res.send(users[0]._id);
            }
        } else {
            res.send("bad");
        }
    }
};