var assert = require('assert');
var should = require('should');
var markdox = require('../index');
var async = require('async');
var _ = require('underscore');

describe('Markdox', function(){
  it('always render file group in order they were given', function(done){
    var files = [
      __dirname + '/fixtures/transformTitle.coffee',
      __dirname + '/fixtures/random-order.coffee',
    ];
    var result;

    this.timeout(0);

    markdox.process(files, function(err, output){
      should.not.exist(err);

      var indices = files.map(function(filename) { return output.indexOf(filename); });
      indices.should.be.eql(indices.sort());

      done();
    });
  });
});

