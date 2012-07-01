
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs')
  , handlebars = require('handlebars')
  , async = require('async')
  , version = require('../package.json').version
  , formatter = require('../lib/formatter')
  , async = require('async')
  , fs = require('fs');

/**
 * Library version.
 */

exports.version = version;

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

exports.generate = function(docfiles, callback) {
  var templatePath = __dirname + '/../templates/template.md.mustache';

  fs.readFile(templatePath, 'utf-8', function(err, data){
    if (err) {
      throw err;
    }

    var template = handlebars.compile(data);
    var output = template({docfiles: docfiles});

    callback(null, output);
  });

};

exports.process = function (files, outputPath, callback) {
  callback =  callback || function() {};

  var docfiles = [];

  async.forEach(files, function(file, callback){

    exports.parse(file, function(err, doc){
      var docfile = {
        filename: file,
        javadoc: doc
      };
      docfiles.push(formatter.format(docfile));
      callback(err);
    });

  }, function (err) {
    console.log('Generation starting');
    exports.generate(docfiles, function(err, output){
      if (err) {
        throw err;
      }
      console.log('Write file ' + outputPath);
      
      fs.writeFile(outputPath, output, 'utf-8', function(err){
        if (err) {
          throw err;
        }

        callback(output);
      });
      
    });
  });
};