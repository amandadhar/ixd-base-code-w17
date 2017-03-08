
/*
 * GET home page.
 */
exports.view = function(req, res){
  res.render('index');
};

exports.viewB = function(req, res) {
  res.render('indexB');
};

exports.designB = function(req, res) {
  res.render('designB');
};