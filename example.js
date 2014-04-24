//just run:
//  basher example.js

module.exports = {
  hello: function() {
      console.log('hello world!!')
  },
  goodbye: function(first, second) {
      console.log('goodbye called with args(' + first + ', ' + second + ')')
  },
}
