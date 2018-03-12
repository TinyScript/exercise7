module.exports = function (str) {
  // TODO
  let ret = str.match(/\bx=([\d]+)\b/);
  return ret && ret[1];
}