#!/usr/bin/env node

var basedir = process.cwd();
var path = process.argv[2];
var args = process.argv.slice(3);
var islocal = (path[0] === '.' || path[0] === '/')
if (islocal) path = basedir + '/' + path
var module = require(path)
var retval = module.apply(this,args)
if (retval) console.log(retval)
