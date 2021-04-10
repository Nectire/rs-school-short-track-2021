/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const filtered = [];
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      filtered.push(arr[i]);
    }
  }
  filtered.sort((a, b) => b - a);
  for (let a = 0; a < arr.length; a++) {
    if (arr[a] !== -1) {
      newArr.push(filtered.pop());
    } else {
      newArr.push(arr[a]);
    }
  }
  return newArr;
}

module.exports = sortByHeight;
