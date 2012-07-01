
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs')
  , handlebars = require('handlebars')
  , async = require('async')
  , version = require('../package.json').version;

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

exports.generate = function(docfile, callback) {
  var basePath = '/home/charles/Repositories/doxstrap';

  var templatePaths = {
    main:'themes/md/main.md.mustache' , 
    header:'themes/md/header.md.mustache' , 
    content:'themes/md/content.md.mustache' , 
    footer:'themes/md/footer.md.mustache'
  };
  
  var templateReaders = {};

  for (var key in templatePaths) {
    var templatePath = templatePaths[key];
    var path = basePath + '/' + templatePath;

    var tmpFn = function(path){
      return function(callback){
        fs.readFile(path, 'utf-8', function(err, data){
          callback(err, handlebars.compile(data));
        });
      };
    };

    templateReaders[key] = tmpFn(path);
  }

  async.parallel(templateReaders, function(err, compiledTemplates){
    if (err) {
      throw err;
    }

    var output = compiledTemplates['main']({
      header: compiledTemplates['header'](),
      content: compiledTemplates['content'](docfile),
      footer: compiledTemplates['footer']()
    });

    callback(err, output);
  });
};