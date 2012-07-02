

<!-- Start lib/markdox.js -->










## parse()
Parses the given file.

### Examples:

    var markdox = require('markdox');
    markdox.parse('/path/to/file.js', callback);


### Params: 

* **String** *path* Filepath to parse

* **Object|Function** *options* The options or the callback (if there is not options)

* **Function** *callback* The callback, it gets two arguments (err, result)




---





## generate()
Generates the output for comments.


### Params: 

* **Object** *docfiles* Comments to render

* **Object|Function** *options* The options or the callback (if there is not options)

* **Function** *callback* The callback, it gets two arguments (err, output)




---





## process()
Parses and generates the documentation for given files.

### Examples:

    var markdox = require('markdox');
    markdox.parse('/path/to/file.js', callback);


### Params: 

* **String|Array** *files* Files to process

* **Object|Function** *options* The options or the callback (if there is not options)

* **Function** *callback* The callback, it gets two arguments (err, output)




---




<!-- End lib/markdox.js -->

