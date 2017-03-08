exports.view = function(req, res){
    res.render('equipment');
};

exports.next = function(req, res) {
    var info = req.body;
    console.log(info);
    res.render('equipment', info);
};