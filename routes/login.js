var models = require("../models");

// Login screen
exports.view = function(req, res){
    res.render('login');
};

exports.register = function(req, res) {
    res.render('register', { "status": "emailNotTaken" });
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
            console.log("got here!!!!");

            res.render('register', { "status": "emailTaken" });
            //res.end();
            console.log("skipped?");
        } else {
            var newUser = new models.user({
                "name": info.name,
                "email": info.email,
                "password": info.password
            });
            newUser.save(addNewUser);
        }
    }

    function addNewUser(err) {
        if(err) { console.log(err); res.send(500); }
        console.log("GOT HERE");
        res.end();
    }
};