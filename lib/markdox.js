
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs')
  , async = require('async')
  , version = require('../package.json').version
  , formatter = require('../lib/formatter')
  , async = require('async')
  , fs = require('fs')
  , util = require('util')
  , ejs = require('ejs');

/**
 * Library version.
 */

exports.version = version;

/**
 * Parse
 */

exports.parse = function(path, callback) {
  fs.readFile(path, 'utf-8', function(err, data){
    callback(err, dox.parseComments(data, {raw: true}));
  });
};

/**
 * Generate
 */

exports.generate = function(docfiles, callback) {
  var templatePath = __dirname + '/../templates/template.md.ejs';

  fs.readFile(templatePath, 'utf-8', function(err, data){
    if (err) {
      throw err;
    }

    // Remove indentation
    data = data.replace(/\n */g, '\n');

    var output = ejs.render(data, {docfiles: docfiles});

    callback(null, output);
  });

};

exports.process = function (files, outputPath, callback) {
  callback =  callback || function() {};

  if (!util.isArray(files)) {
    files = [files];
  }

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
    exports.generate(docfiles, function(err, output){
      if (err) {
        throw err;
      }
      
      fs.writeFile(outputPath, output, 'utf-8', function(err){
        if (err) {
          throw err;
        }

        callback(null, output);
      });
      
    });
  });
};