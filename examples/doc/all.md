

<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/a.js -->






Library version.




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/a.js -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/b.js -->



# This file is an incredible parser.




Library version.






## parse(str)
Parse the given `str`.

### Examples:

    parse(str)
    // =&gt; &quot;wahoo&quot;


### Params: 

* **String|Buffer** *str* String to parse




### Return:

* **String** Persed string


---




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/b.js -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/c.js -->






Module dependencies.




Library version.





## parseComments(js)
Parse comments in the given string of `js`.


### Params: 

* **String** *js* 




### Return:

* **Array** 


---





## parseComment(str)
Parse the given comment `str`.

## The comment object returned contains the following

 - `tags`  array of tag objects
 - `description` the first line of the comment
 - `body` lines following the description
 - `content` both the description and the body
 - `isPrivate` true when &quot;@api private&quot; is used


### Params: 

* **String** *str* 




### Return:

* **Object** 


---





## parseTag()
Parse tag string &quot;@param {Array} name description&quot; etc.


### Params: 

* **String** ** 




### Return:

* **Object** 


---




shouldn't fail





## parseTagTypes(str)
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
        tag.title = parts.length &gt; 1
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
Parse tag type string &quot;{Array|Object}&quot; etc.


### Params: 

* **String** *str* 




### Return:

* **Array** 


---





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


---




Escape the given `html`.





<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/c.js -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/d.js -->




## parseTagTypes(str)
Parse tag type string &quot;{Array|Object}&quot; etc.


### Params: 

* **String** *str* 




### Return:

* **Array** 


---




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/d.js -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/titles.js -->



Description.

## Some examples

 foo

Some longer thing
for example:

 bar




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/titles.js -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/a.coffee -->






Library version.




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/a.coffee -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/b.coffee -->



# This file is an incredible parser.




Library version.






## parse(str)
Parse the given `str`.

## Examples

    parse(str)
    // =&gt; &quot;wahoo&quot;


### Params: 

* **String|Buffer** *str* String to parse




### Return:

* **String** Persed string


---




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/b.coffee -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/c.coffee -->






Module dependencies.




Library version.





## parseComments(js)
Parse comments in the given string of `js`.


### Params: 

* **String** *js* 




### Return:

* **Array** 


---





## parseComment(str)
Parse the given comment `str`.

## The comment object returned contains the following

 - `tags`  array of tag objects
 - `description` the first line of the comment
 - `body` lines following the description
 - `content` both the description and the body
 - `isPrivate` true when &quot;@api private&quot; is used


### Params: 

* **String** *str* 




### Return:

* **Object** 


---





## parseTag()
Parse tag string &quot;@param {Array} name description&quot; etc.


### Params: 

* **String** ** 




### Return:

* **Object** 


---





## parseTagTypes(str)
Parse tag type string &quot;{Array|Object}&quot; etc.


### Params: 

* **String** *str* 




### Return:

* **Array** 


---





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


---




Escape the given `html`.





<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/c.coffee -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/d.coffee -->



Parse tag type string &quot;{Array|Object}&quot; etc.





<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/d.coffee -->



<!-- Start /home/charles/Repositories/doxstrap/examples/fixtures/titles.coffee -->



Description.

## Some examples

 foo

Some longer thing
for example:

 bar




<!-- End /home/charles/Repositories/doxstrap/examples/fixtures/titles.coffee -->

