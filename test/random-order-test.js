var assert = require('assert');
var should = require('should');
var markdox = require('../index');
var async = require('async');
var _ = require('underscore');

describe('Markdox', function(){
  it('always render the documentation in the same order', function(done){
    var file = __dirname + '/fixtures/random-order.coffee';
    var result;

    this.timeout(0);

    async.eachSeries(_.range(50), function(item, callback) {
        markdox.process(file, function(err, output){
        if (!result) {
          result = output;
        }

        result.should.equal(output);
        callback();
        });
    }, function() {
      done();
    });
  });
});