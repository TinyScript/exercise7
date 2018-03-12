module.exports = function (str) {
  // TODO
  let ret = str.match(/^(0x[\w]{2}\s*){8}$/); 
  return ret && ret[0];
}