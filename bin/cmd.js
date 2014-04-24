#!/usr/bin/env node

//this was copy + pasted + edited from
//https://github.com/gruntjs/grunt-cli/blob/master/bin/grunt
//under the MIT license

'use strict';

process.title = 'basher';

// Especially badass external libs.
var resolve = require('resolve').sync;

// Internal libs.
var basher = require('../')

var basedir = process.cwd();
var basherpath;

var args = process.argv.slice(2);

function resolve_using_filepath(filepath) {
  try {
    basherpath = resolve('./' + filepath, {basedir: basedir});
  } catch (ex) {
    // No basher install found!
    if (!basherpath) {
      console.error('unable to resolve ' + filepath);
      process.exit(1)
    }
  }
}

function resolve_using_basherfile() {
  try {
    basherpath = resolve('./Basherfile', {basedir: basedir});
  } catch (ex) {
    // No basher install found!
    if (!basherpath) {
      console.error('Unable to find local Basherfile.');
      process.exit(1)
    }
  }
}

if (args[0] !== undefined) {
  resolve_using_filepath(args[0])
} else {
  resolve_using_basherfile()
}

// Everything looks good. Require local basher and run it.
var basher = require('../')
var basher_methods = require(basherpath)
basher(basher_methods)