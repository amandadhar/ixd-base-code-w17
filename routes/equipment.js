exports.view = function(req, res){
    res.render('A/equipment');
};

exports.next = function(req, res) {
    var info = req.body;
    console.log(info);
    res.render('A/equipment', info);
};