
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
  , ejs = require('ejs')
  , u = require('underscore');

/**
 * Library version.
 */

exports.version = version;

/**
 * Parse
 */

exports.parse = function(path, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } 
  
  callback =  callback || function() {};
  options = options || {};

  options = u.defaults(options, {
    encoding: 'utf-8'
  });

  fs.readFile(path, options.encoding, function(err, data){
    callback(err, dox.parseComments(data, {raw: true}));
  });
};

/**
 * Generate
 */

exports.generate = function(docfiles, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } 
  
  callback =  callback || function() {};
  options = options || {};

  options = u.defaults(options, {
    template: __dirname + '/../templates/template.md.ejs'
    , encoding: 'utf-8'
  });

  fs.readFile(options.template, options.encoding, function(err, data){
    if (err) {
      throw err;
    }

    // Remove indentation
    data = data.replace(/\n */g, '\n');

    var output = ejs.render(data, {docfiles: docfiles});

    callback(null, output);
  });

};

exports.process = function (files, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } 

  callback =  callback || function() {};
  options = options || {};

  options = u.defaults(options, {
    output: false
    , encoding: 'utf-8'
    , formatter: function(docfile){return docfile;}
  });

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
      formatedDocfile = options.formatter(formatter.format(docfile));
      
      docfiles.push(formatedDocfile);
      callback(err);
    });

  }, function (err) {
    exports.generate(docfiles, options, function(err, output){
      if (err) {
        throw err;
      }
      
      if (typeof options.output === 'string') {
        fs.writeFile(options.output, output, options.encoding, function(err){
          if (err) {
            throw err;
          }

          callback(null, output);
        });
      } else {
        callback(null, output);
      }
      
    });
  });
};