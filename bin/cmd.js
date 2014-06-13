#!/usr/bin/env node

//some of this was copy + pasted + edited from
//https://github.com/gruntjs/grunt-cli/blob/master/bin/grunt
//under the MIT license

process.title = 'basher';

var resolve = require('resolve').sync;
var basher = require('../')

var basedir = process.cwd();
var args = process.argv.slice(2);

var basherfile = './Basherfile'
var path = (args[0] !== undefined) 
  ? args[0]
  : basherfile

try {
  path = resolve('./' + path, {basedir: basedir});
} catch (ex) {
  if (path === basherfile)
    console.error('Unable to use local Basherfile.');
  else
    console.error('Unable to resolve ' + path);
  process.exit(1)
}

var module_of_methods = require(path)
basher(module_of_methods)
