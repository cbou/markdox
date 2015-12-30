var assert = require('assert');
var should = require('should');
var markdox = require('../index');

describe('Markdox', function() {

  it('should only parse valid jsdocs (coffee)', function(done) {
    var file = __dirname + '/fixtures/comment-types.coffee';
    markdox.process(file, function(err, output){
      should.not.exist(err);
      output.should.not.match(/nope/);
      output.should.match(/yep/);
      done();
    });
  });

  it('should only parse valid jsdocs (js)', function(done) {
    var file = __dirname + '/fixtures/comment-types.js';
    markdox.process(file, function(err, output){
      should.not.exist(err);
      output.should.not.match(/nope/);
      output.should.match(/yep/);
      done();
    });
  });
});
