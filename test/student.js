var should = require('should-http'),
	 request = require('supertest');
	 
	 describe("Student", function(){
	 	var url = "localhost:5000";
	 	describe("find()", function(){
	 		it("should retrieve all student records", function(done){
	 			request(url).
	 			get('/students').
	 			end(function(err,res)
	 			{
	 					if(err) throw err;
	 					res.should.have.status(200);
	 					res.body.should.be.an.instanceof(Array);
	 					done();
	 			});
	 	});
	 });
	   describe("insert()", function(){
	 		it("should return newly created record", function(done){
	 			request(url).
	 			post('/students').
	 			send({'studno':'2013-12345','name':'Betel'}).
	 			end(function(err,res)
	 			{
	 					if(err) throw err;
	 					res.should.have.status(200);
	 					res.body.should.be.an.instanceof(Object);
	 					res.body.should.be.ok;
	 					res.body.should.have.properties(['id','studno','name']);
	 					res.body.should.have.ownProperty('name').equal('betel');
	 					res.body.should.have.ownProperty('studno').equal('2013-12345');
	 					done();
	 			});
	 		});
	 	});
});
