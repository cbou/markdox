var assert = require('assert');
var should = require('should');
var markdox = require('../index')

describe('Markdox', function(){
  it('should transform h1, h2 (...) into markdown title', function(done){
    var file = __dirname + '/fixtures/transformTitle.coffee';

    markdox.process(file, function(err, output){
      should.not.exist(err);

      output.should.match(/\n# My first title/);
      output.should.match(/\n## My second title/);

      done();
    });
  })
})