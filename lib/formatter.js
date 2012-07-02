var formatter = {};

formatter.format = function (docfile) {
  var result = [];

  docfile.javadoc.forEach(function(javadoc, index){

    var type = (javadoc.ctx && javadoc.ctx.type);
    var name = (javadoc.ctx && typeof javadoc.ctx.name === 'string') ? javadoc.ctx.name : '';

    paramStr = [];
    paramTags = [];
    returnTags = [];
    tagName = ''
    tagClass = ''
    tagMethod = ''
    javadoc.tags.forEach(function(tag){

      if (tag.type == 'param') {
        tag.joinedTypes = tag.types.join('|');
        paramTags.push(tag);
        paramStr.push(tag.name);
      } else if (tag.type == 'return') {
        tag.joinedTypes = tag.types.join('|');
        returnTags.push(tag);
      } else if (tag.type == 'method') {
        type = 'method';
        tagMethod = tag.string;
      } else if (tag.type == 'class') {
        type = 'class';
        tagClass = tag.string;
      } else if (tag.type == 'name') {
        tagName = tag.string;
      }
    });

    name = tagName !== '' ? tagName : tagMethod !== '' ? tagMethod : tagClass !== '' ? tagClass : name;
    
    docfile.javadoc[index] = {
      name: name
      , paramStr: paramStr.join(', ')
      , paramTags: paramTags
      , returnTags: returnTags

      , type: type
      , isMethod: type === 'method'
      , isClass: type === 'class'
      , description: javadoc.description.full
      , ignore: javadoc.ignore
      , raw: javadoc
    }
  });

  return docfile;
}

module.exports = formatter;