var assert = require('assert');
var should = require('should');
var markdox = require('../index');

var compiler = function(filepath, data) {
  true.should.be.exactly(true);
	return markdox.defaultCompiler(filepath, data);
};

describe('Markdox', function(){
  it('should transform h1, h2 (...) into markdown title', function(done){
    var file = __dirname + '/fixtures/transformTitle.coffee';

    var options = {
    	compiler: compiler
    };

    markdox.process(file, options, function(err, output){
      should.not.exist(err);
      
      output.should.match(/\n# My first title/);
      output.should.match(/\n## My second title/);

      done();
    });
  })
})