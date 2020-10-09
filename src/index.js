module.exports = function reverse (n) {
  let str = Math.abs(n).toString();
  const arr = str.split('');
  arr.reverse();
  str = arr.join('');
  return +str;
}
