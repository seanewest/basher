#Basher

Run modules from the command line.

##Installation

```
npm install -g seanewest/basher
```

##Run modules from npm

```
$ npm install gcd
$ basher gcd 8 12
4
```

##Run local modules
```js
// mymodule.js
module.exports = function() {
  console.log('hello world!!')
}
```

```
$ basher ./mymodule
hello world!!
```
