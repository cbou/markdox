
/*!
 * Module dependencies.
 */

var dox = require('dox')
  , fs = require('fs')
  , async = require('async')
  , version = require('../package.json').version
  , formatter = require('../lib/formatter')
  , compiler = require('../lib/compiler').compile
  , async = require('async')
  , fs = require('fs')
  , util = require('util')
  , ejs = require('ejs')
  , u = require('underscore')
  , path = require('path');

/*!
 * Library version.
 */

exports.version = version;

/**
 * Parses and generates the documentation for given files.
 *
 * ### Available options:
 *
 *  * {String} output: Path or the output to produce
 *  * {String} template: Path or the custom template
 *  * {String} encoding: Encoding of templates and files to parse
 *  * {Function} formatter: Custom formatter
 *  * {Function} compiler: Compiler (for example for CoffeeScript IcedCoffeeScript)
 *
 * ### Examples:
 *
 *     var markdox = require('markdox');
 *     markdox.parse('/path/to/file.js', callback);
 *
 * @param {String|Array} files Files to process
 * @param {Object|Function|String} options The options or the callback (if there is not options) or the output option
 * @param {Function} callback The callback, it gets two arguments (err, output)
 *
 * @api public
 */
exports.process = function (files, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } else if (typeof options === 'string') {
    options = {
      output: options
    };
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
      var formatedDocfile = options.formatter(formatter.format(docfile));
      
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

/**
 * Parses the given file.
 *
 * ### Examples:
 *
 *     var markdox = require('markdox');
 *     markdox.parse('/path/to/file.js', callback);
 *
 * @param {String} filepath Filepath to parse
 * @param {Object|Function} options The options or the callback (if there is not options)
 * @param {Function} callback The callback, it gets two arguments (err, result)
 *
 * @api public
 */
exports.parse = function(filepath, options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  } 
  
  callback =  callback || function() {};
  options = options || {};

  options = u.defaults(options, {
    encoding: 'utf-8'
    , compiler: compiler
  });

  fs.readFile(filepath, options.encoding, function(err, data){

    data = compiler(filepath, data);

    callback(err, dox.parseComments(data, {raw: true}));
  });
};

/**
 * Generates the output for comments.
 *
 * @param {Object} docfiles Comments to render
 * @param {Object|Function|String} options The options or the callback (if there is not options)
 * @param {Function} callback The callback, it gets two arguments (err, output)
 *
 * @api public
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

  ejs.open = '<?';
  ejs.close = '?>';

  fs.readFile(options.template, options.encoding, function(err, data){
    if (err) {
      throw err;
    }

    // Remove indentation
    data = data.replace(/\n */g, '\n');

    var output = ejs.render(data, {docfiles: docfiles});

    // Remove double lines
    output = output.replace(/\n{3,}/g, '\n\n');

    callback(null, output);
  });

};