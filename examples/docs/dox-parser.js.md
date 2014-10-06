

<!-- Start examples/fixtures/dox-parser.js -->

# The parser

This is a incredible parser.

    var parser = require('dox-parser')

Dox
Copyright (c) 2010 TJ Holowaychuk <tj@vision-media.ca>
MIT Licensed

## parseComments(js, js2)

Parse comments in the given string of `js`.

See: exports.parseComment

### Params:

* **String** *js* 
* **String** *js2* 

### Return:

* **Array** 

## parseComment(str)

Parse the given comment `str`.

The comment object returned contains the following:

 - `tags`  array of tag objects
 - `description` the first line of the comment
 - `body` lines following the description
 - `content` both the description and the body
 - `isPrivate` true when "@api private" is used

See: exports.parseTag

### Params:

* **String** *str* 

### Return:

* **Object** 

## parseTag()

Parse tag string "@param {Array} name description" etc.

### Params:

* **String** ** 

### Return:

* **Object** 

shouldn't fail

## parseTagTypes(str)

Parse tag type string "{Array|Object}" etc.

### Params:

* **String** *str* 

### Return:

* **Array** 

## parseCodeContext(str)

Parse the context from the given `str` of js.

This method attempts to discover the context
for the comment based on it's code. Currently
supports:

  - function statements
  - function expressions
  - prototype methods
  - prototype properties
  - methods
  - properties
  - declarations

### Params:

* **String** *str* 

### Return:

* **Object** 

## escape(html)

Escape the given `html`.

### Params:

* **String** *html* 

### Return:

* **String** 

<!-- End examples/fixtures/dox-parser.js -->

