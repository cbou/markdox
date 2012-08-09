
var path = require('path')
  , coffee = require('coffee-script')
  , iced = require('iced-coffee-script');

var compiler = {}

compiler.compile = function (filepath, data) {

    if (path.extname(filepath) === '.coffee') {
      data = coffee.compile(data);
    }

    if (path.extname(filepath) === '.iced') {
      data = iced.compile(data);
    }

    return data;
};

module.exports = compiler;