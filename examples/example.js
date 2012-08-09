var markdox = require('../lib/markdox');
var async = require('async');
var path = require('path');
var docFolder = __dirname + '/docs';

// Fixtures
var fixtures = [
  __dirname + '/fixtures/small-parser.js',
  __dirname + '/fixtures/dox-parser.js',
  __dirname + '/fixtures/small-parser.coffee',
  __dirname + '/fixtures/dox-parser.coffee',
  __dirname + '/fixtures/tags.js',
  __dirname + '/fixtures/tags.coffee',
  __dirname + '/fixtures/iced.iced',
];


// One file per Javascript file
async.forEach(fixtures, function(file, callback){
  var output = docFolder + '/' + path.basename(file) + '.md';
  markdox.process(file, output, callback);
}, function (err) {
  if (err) {
    throw err;
  }
  console.log('Documents generated with success');
});

// One file for all Javascript files
var output = docFolder + '/all.md';
markdox.process(fixtures, {output:output}, function(){
  console.log('File `all.md` generated with success');
});