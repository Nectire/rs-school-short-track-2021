/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const arr = str.split('');
  let k = 1;
  let string = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      k++;
    } else {
      if (k === 1) {
        k = '';
      }
      string += k + arr[i];
      k = 1;
    }
  }
  return string;
}

module.exports = encodeLine;
