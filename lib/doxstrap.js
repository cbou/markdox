
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs');

/**
 * Library version.
 */

exports.version = '0.1.0';

/**
 * Parse
 */

exports.parse = function(path, callback) {
  console.log('Start parsing for %s', path);

  fs.readFile(path, 'utf-8', function(err, data){
    callback(err, dox.parseComments(data));
  });
};

/**
 * Generate
 */

exports.generate = function(doc) {
  console.log(doc);
};