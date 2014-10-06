

<!-- Start examples/fixtures/small-parser.js -->

# The small parser

This is a small parser.

    var parser = require('small-parser')

## parse(str)

Parse the given `str`.

Examples:

    parse(str)
    // => "wahoo"

### Params:

* **String|Buffer** *str* String to parse

### Return:

* **String** Persed string

<!-- End examples/fixtures/small-parser.js -->

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

<!-- Start examples/fixtures/small-parser.coffee -->

# The small parser

This is a small parser.

    var parser = require('small-parser')

## parse(str)

Parse the given `str`.

Examples:

    parse(str)
    // => "wahoo"

### Params:

* **String|Buffer** *str* String to parse

### Return:

* **String** Persed string

<!-- End examples/fixtures/small-parser.coffee -->

<!-- Start examples/fixtures/dox-parser.coffee -->

# The parser

This is a incredible parser.

    var parser = require('dox-parser')

Dox
Copyright (c) 2010 TJ Holowaychuk <tj@vision-media.ca>
MIT Licensed

## parseComments(js)

Parse comments in the given string of `js`.

See: exports.parseComment

### Params:

* **String** *js* 

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

Escape the given `html`.

### Params:

* **String** *html* 

### Return:

* **String** 

<!-- End examples/fixtures/dox-parser.coffee -->

<!-- Start examples/fixtures/tags.js -->

# log.js

This file contains logging function.

**Deprecated**

Author: Charles Bourasseau <charles.bourasseau@gmail.com>

Version: 0.0.1

## helloWorld(message)

This method log a given message to the console.

### Examples:

    log('It works!');

See: console.log()

### Params:

* **String** *message* The message to log

### Return:

* **Boolean** True if it success, false if not

<!-- End examples/fixtures/tags.js -->

<!-- Start examples/fixtures/tags.coffee -->

# log.js

This file contains logging function.

**Deprecated**

Author: Charles Bourasseau <charles.bourasseau@gmail.com>

Version: 0.0.1

## helloWorld(message)

This method log a given message to the console.
### Examples:

    log('It works!');

See: console.log()

### Params:

* **String** *message* The message to log

### Return:

* **Boolean** True if it success, false if not

<!-- End examples/fixtures/tags.coffee -->

<!-- Start examples/fixtures/iced.iced -->

## search

Search on Twitter with a single keyword 

### Params:

* **String** *keyword* The keyword
* **Function** *callback* The callback function with arguments (result).

<!-- End examples/fixtures/iced.iced -->

