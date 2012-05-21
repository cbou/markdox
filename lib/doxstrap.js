
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs')
  , handlebars = require('handlebars')
  , async = require('async');

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

exports.generate = function(doc, callback) {
  var basePath = '/home/charles/Repositories/doxstrap';

  var templatePaths = {
    html:'themes/doxstrap/html.html.mustache' , 
    header:'themes/doxstrap/header.html.mustache' , 
    main:'themes/doxstrap/main.html.mustache' , 
    footer:'themes/doxstrap/footer.html.mustache'
  };

  var templateReaders = {};

  for (var key in templatePaths) {
    var templatePath = templatePaths[key];
    var path = basePath + '/' + templatePath;

    templateReaders[key] = function(path){
      return function(callback){
        fs.readFile(path, 'utf-8', function(err, data){
          callback(err, handlebars.compile(data));
        });
      };
    }(path); // pass `path` as copy, not as reference
  }

  async.parallel(templateReaders, function(err, compiledTemplates){
    var output = compiledTemplates['html']({
      header: compiledTemplates['header'](),
      main: compiledTemplates['main'](),
      footer: compiledTemplates['footer']()
    });

    callback(err, output);
  });
};