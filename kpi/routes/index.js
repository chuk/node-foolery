
/*
 * GET home page. [ Read Me ] 
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};