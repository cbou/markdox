var markdox = require('../index');
var should = require('should');

describe('Markdox', function() {
  it('escapes `<` in @param and @return tags', function(done) {
    var file = __dirname + '/fixtures/complexTypes.js';

    markdox.process(file, function(err, output) {
      should.not.exist(err);

      output.should.match(/Promise.\\<Object>/);
      output.should.match(/Promise.\\<Array>/);
      output.should.match(/Array.\\<Object>/);

      done();
    });
  });
});
