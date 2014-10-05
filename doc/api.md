

<!-- Start lib/markdox.js -->

## process(files, options, callback)

Parses and generates the documentation for given files.

### Available options:

 * {String} output: Path or the output to produce
 * {String} template: Path or the custom template
 * {String} encoding: Encoding of templates and files to parse
 * {Function} formatter: Custom formatter
 * {Function} compiler: Compiler (for example for CoffeeScript IcedCoffeeScript)

### Examples:

    var markdox = require('markdox');
    markdox.parse('/path/to/file.js', callback);

### Params: 

* **String|Array** *files* Files to process
* **Object|Function|String** *options* The options or the callback (if there is not options) or the output option
* **Function** *callback* The callback, it gets two arguments (err, output) 

## parse(filepath, options, callback)

Parses the given file.

### Examples:

    var markdox = require('markdox');
    markdox.parse('/path/to/file.js', callback);

### Params: 

* **String** *filepath* Filepath to parse
* **Object|Function** *options* The options or the callback (if there is not options)
* **Function** *callback* The callback, it gets two arguments (err, result) 

## generate(docfiles, options, callback)

Generates the output for comments.

### Params: 

* **Object** *docfiles* Comments to render
* **Object|Function|String** *options* The options or the callback (if there is not options)
* **Function** *callback* The callback, it gets two arguments (err, output) 

<!-- End lib/markdox.js -->

