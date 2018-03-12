var marked = require('marked')

module.exports = function (str) {
  var md = marked(str)
  // TODO
  console.log(md)
  console.log(md.replace(/@@([\w\.]*)@@/g, '<blink>$1</blink>'))
  return md.replace(/@@([\S]*)@@/g, '<blink>$1</blink>')
}