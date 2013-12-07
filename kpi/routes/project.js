
/*
 * GET project listing.
 */

exports.list = function(req, res){
  	res.send("respond with a list of resources");
};


/*
 * Create project.
 */

exports.create = function(req, res){
	console.log(req.body);
  	res.send("respond with newly created resourse");
};


/*
 * GET a project.
 */

exports.get = function(req, res){
	var id = req.param('id');
  	res.send("respond with a resource:" + id);
};


/*
 * UPDATE a project.
 */

exports.update = function(req, res){
	var id = req.param('id');
  	res.send("respond no content:" + id);
};