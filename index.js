var fs = require('fs');

module.exports = basher

function basher(obj_of_funcs) {
  getAllMethods(obj_of_funcs).forEach(function(name) {
    func_to_script(name, obj_of_funcs[name])
  })
}

/*
function wrapper(func, args) {
  func.apply(this, args)
}
*/


function func_to_script(name, func) { 

  var str = '#!/usr/bin/env node' + '\n'
  str += 'var ' + name + ' = ' + func.toString() + '\n'
  str += name + '.apply(this, process.argv.slice(2))' + '\n'

  if (!fs.existsSync('./bin'))
    fs.mkdir('./bin')

  var path = "./bin/" + name
  fs.writeFile(path, str, function(err) {
      if(err) {
        console.log(err);
      } else {
        fs.chmod(path, 0755, function(err) {;})
      }
  });  
}

function getAllMethods(object) {
  return Object.getOwnPropertyNames(object).filter(function(property) {
      return typeof object[property] == 'function';
  });
}
