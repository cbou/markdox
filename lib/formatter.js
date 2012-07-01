var toMarkdown = require('to-markdown').toMarkdown;
var entities = require("entities");
var formatter = {};

formatter.format = function (docfile) {
  var result = [];

  docfile.javadoc.forEach(function(javadoc, index){
    console.log(javadoc);

    paramTags = [];
    returnTags = [];
    javadoc.tags.forEach(function(tag){
      console.log(tag);
      if (tag.type == 'param') {
        tag.joinedTypes = tag.types.join('|');
        paramTags.push(tag);
      } else if (tag.type == 'return') {
        tag.joinedTypes = tag.types.join('|');
        returnTags.push(tag);
      }
    });
    
    docfile.javadoc[index] = {
      name: (javadoc.ctx && typeof javadoc.ctx.name === 'string') ? javadoc.ctx.name : ''
      , paramTags: paramTags
      , returnTags: returnTags

      , isMethod: (javadoc.ctx && javadoc.ctx.type === 'method')
      , description: toMarkdown(entities.decode(javadoc.description.full))
      , raw: javadoc
    }
  });

  return docfile;
}

module.exports = formatter;