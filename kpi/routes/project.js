
/*
 * GET project listing.
 */

exports.list = function(req, res){
	res.status(200);
  	res.send("respond with a list of resources");
};


/*
 * Create project.
 */

exports.create = function(req, res){
	console.log(req.body);
	res.status(201);
  	res.send("respond with newly created resourse");
};


/*
 * GET a project.
 */

exports.get = function(req, res){
	var id = req.param('id');
	res.status(200);
	if ( id > 100 ) {
		// just a quick hack to force 404 for a test
		res.status(404);
	}
  	res.send("respond with a resource:" + id);
};


/*
 * UPDATE a project.
 */

exports.update = function(req, res){
	var id = req.param('id');
	res.status(204);
  	res.send("respond no content:" + id);
};