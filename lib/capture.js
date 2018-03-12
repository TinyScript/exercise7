module.exports = function (str) {
  // TODO
  let ret = str.match(/x=([\d]+)/);
  return ret && ret[1];
}