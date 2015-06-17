var assert = require('assert');
var should = require('should');
var markdox = require('../index');
var async = require('async');

describe('Markdox', function(){
  it('always render the documentation in the same order', function(done){
    var file = __dirname + '/fixtures/random-order.coffee';
	var result;
	async.eachSeries(new Array(50).join(".").split(".").map(function (c, i) { return i; }), function(item, callback) {
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
  })
})
