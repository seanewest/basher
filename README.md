Basher
=============

Basher is a utility to convert regular old JS functions into individual command line tools.

![basher](./image.jpg)

Installation
-----------

```
npm install -g seanewest/basher
```

Usage
-----

Sample file:

``` js
module.exports = {
  hello: function() {
      console.log('hello world!!')
  },
  goodbye: function(first, second) {
      console.log('goodbye called with args(' + first + ', ' + second + ')')
  },
}
```
Run basher on this file:

```
$ basher myfile.js
```

Look at whats in your bin!

```
$ ls ./bin
hello goodbye
```

Now you can run those methods from the command line!

```
$ bin/hello
hello world!!
$ bin/goodbye and farewell
goodbye called with args(and, farewell)
```
