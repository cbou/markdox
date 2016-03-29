var markdox = require('../index');
var should = require('should');

describe('Markdox', function() {
  it('escapes `<` in @param and @return tags', function(done) {
    var file = __dirname + '/fixtures/complexTypes.js';

    markdox.process(file, function(err, output) {
      should.not.exist(err);

      output.should.match(/Promise.&lt;Object&gt;/);
      output.should.match(/Promise.&lt;Array&gt;/);
      output.should.match(/Array.&lt;Object&gt;/);

      done();
    });
  });
});
