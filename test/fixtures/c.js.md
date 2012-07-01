
# test/fixtures/c.js

---









## parseComments()
Parse comments in the given string of `js`.

### Params:

* **String** *js* 


### Return:

* **Array** 

---



## parseComment()
Parse the given comment `str`.

## The comment object returned contains the following

*   `tags`  array of tag objects
*   `description` the first line of the comment
*   `body` lines following the description
*   `content` both the description and the body
*   `isPrivate` true when "@api private" is used

### Params:

* **String** *str* 


### Return:

* **Object** 

---



## parseTag()
Parse tag string "@param {Array} name description" etc.

### Params:

* **String** ** 


### Return:

* **Object** 

---





## parseTagTypes()
/////
    case 'param':
      tag.types = exports.parseTagTypes(parts.shift());
      tag.name = parts.shift() || '';
      tag.description = parts.join(' ');
      break;
    case 'return':
      tag.types = exports.parseTagTypes(parts.shift());
      tag.description = parts.join(' ');
      break;
    case 'see':
      if (~str.indexOf('http')) {
        tag.title = parts.length > 1
          ? parts.shift()
          : '';
        tag.url = parts.join(' ');
      } else {
        tag.local = parts.join(' ');
      }
    case 'api':
      tag.visibility = parts.shift();
      break;
    case 'type':
      tag.types = exports.parseTagTypes(parts.shift());
      break;
  }

return tag;
}

/**
Parse tag type string "{Array|Object}" etc.

### Params:

* **String** *str* 


### Return:

* **Array** 

---



## parseCodeContext()
Parse the context from the given `str` of js.

This method attempts to discover the context
for the comment based on it's code. Currently
supports:

*   function statements
*   function expressions
*   prototype methods
*   prototype properties
*   methods
*   properties
*   declarations

### Params:

* **String** *str* 


### Return:

* **Object** 

---




Documentation generated with Markdox

©2012 Copyright 
