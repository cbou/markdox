var formatter = {};

formatter.format = function (docfile) {
  var result = [];

  docfile.javadoc.forEach(function(javadoc, index){

    var type = (javadoc.ctx && javadoc.ctx.type);
    var name = (javadoc.ctx && typeof javadoc.ctx.name === 'string') ? javadoc.ctx.name : '';

    paramStr = [];
    paramTags = [];
    returnTags = [];
    tagDeprecated = false
    tagName = ''
    tagClass = ''
    tagFunction = ''
    tagMethod = ''
    tagSee = ''
    tagVersion = ''
    tagAuthor = ''

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
      } else if (tag.type == 'function') {
        type = 'function';
        tagFunction = tag.string;
      } else if (tag.type == 'name') {
        tagName = tag.string;
      } else if (tag.type == 'see') {
        tagSee = tag.local;
      } else if (tag.type == 'version') {
        tagVersion = tag.string;
      } else if (tag.type == 'deprecated') {
        tagDeprecated = true;
      } else if (tag.type == 'author') {
        tagAuthor = tag.string;
      }
    });

    name = tagName !== '' ? tagName : tagMethod !== '' ? tagMethod : tagClass !== '' ? tagClass : tagFunction !== '' ? tagFunction : name;

    docfile.javadoc[index] = {
      name: name
      , paramStr: paramStr.join(', ')
      , paramTags: paramTags
      , returnTags: returnTags
      , author: tagAuthor
      , version: tagVersion
      , see: tagSee
      , deprecated: tagDeprecated

      , type: type
      , isMethod: type === 'method'
      , isFunction: type === 'function'
      , isClass: type === 'class'
      , description: javadoc.description.full
      , ignore: javadoc.ignore
      , raw: javadoc
    }
  });

  return docfile;
}

module.exports = formatter;