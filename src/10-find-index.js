/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value) {
  let index = 0;
  if (array.length < 1) return index;
  let start = 0;
  let end = array.length;
  for (start; start < end; start++) {
    const middle = Math.floor((start + (end - 1 - start) / 2));
    if (value === array[middle]) index = middle;
    if (array[start] === value) {
      index = start;
      break;
    } else {
      index = end;
    }
    if (value > array[middle]) start = middle;
    if (value < array[middle]) end = middle;
  }
  return index;
}
module.exports = findIndex;
