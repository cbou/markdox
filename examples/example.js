var markdox = require('../lib/markdox');
var async = require('async');
var path = require('path');
var docFolder = __dirname + '/doc';

// Fixtures
var fixtures = [
  __dirname + '/fixtures/a.js',
  __dirname + '/fixtures/b.js',
  __dirname + '/fixtures/c.js',
  __dirname + '/fixtures/d.js',
  __dirname + '/fixtures/titles.js',
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
markdox.process(fixtures, output, function(){
  console.log('File `all.md` generated with success');
});