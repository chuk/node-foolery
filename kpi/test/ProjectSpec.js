var app = require('./helpers/app');

var should = require('should'),
	request = require('supertest');

describe('projects', function() {

	it('should return valid data for project 9', function(done) {
		request(app)
		.get('/projects/9')
		.expect(200)
		.end(function (err, res) {
			res.status.should.equal(200);
			console.log(res.body);
			done();
		});
	});


	it('should return error for invalid project', function(done) {
		request(app)
		.get('/projects/999999')
		.expect(404)
		.end(function (err,res) {
			res.status.should.equal(404);
			done();
		});
	});
});