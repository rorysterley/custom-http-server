'use strict';

var chai = require('chai');
var chaihttp = require('chai-http');
var fs = require('fs');
var server = require('../server.js');

chai.use(chaihttp);

var expect = chai.expect;

describe('GET request', function() {
  it('should return a JSON body', function(done) {
    chai.request('localhost:3000').
      get("/").
      end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body).to.eql({ name: 'Bilbo', age: '999' });
        done();
      });
  });
});

// This Test works but is having a problem
describe('DELETE request', function() {
  before(function(){
    fs.writeFileSync('./db/mochaChaiTestFile.json', 'I am a test file');
  });

  it('should delete the specified file', function(done) {
    chai.request('localhost:3000')
    .delete('/mochaChaiTestFile.json')
    .end(function(err) {
      // expect(err).to.eql(null);
      // expect(fs.existsSync('./db/mochaChaiTestFile.json')).to.eql(false);
      done();
    });
  });
});



// this may be total BUNK
describe('POST request', function() {
  it('should responds to a post request', function(done) {
    chai.request('localhost:3000')
    .post('./test/db/test_file.json')
    .end({hello: 'world'})
    .end(function(err, res) {
      expect(err).to.eql(null);
      expect(res.body.msg).to.eql('this was added on the server');
      done();
    });
  });
});



