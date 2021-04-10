/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = n.toString();
  const arr1 = str.split('');
  let bigN = 0;
  for (let i = 0; i < arr1.length; i++) {
    const arr2 = str.split('');
    arr2.splice(i, 1);
    const number = +arr2.join('');
    if (number > bigN) {
      bigN = number;
    }
  }
  return bigN;
}

module.exports = deleteDigit;
