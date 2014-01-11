var assert = require('assert');
var should = require('should');
var markdox = require('../index');

var formatter = function(docfile) {
	var docfile = markdox.defaultFormatter(docfile);

	docfile.javadoc[0].description += ' updated';

	return docfile;
};

describe('Markdox', function(){
  it('should transform h1, h2 (...) into markdown title', function(done){
    var file = __dirname + '/fixtures/transformTitle.coffee';

    var options = {
    	formatter: formatter
    };

    markdox.process(file, options, function(err, output){
      should.not.exist(err);
      
      output.should.match(/\n# My first title updated/);
      output.should.match(/\n## My second title/);

      done();
    });
  })
})