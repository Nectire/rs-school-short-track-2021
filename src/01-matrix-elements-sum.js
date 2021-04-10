/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  result = matrix[0].reduce((prev, curr) => prev + curr);
  for (let i = 1; i < matrix.length; i++) {
    for (let a = 0; a < matrix[i].length; a++) {
      if (matrix[i - 1][a] !== 0) {
        result += matrix[i][a];
      }
    }
  }
  return result;
}

module.exports = getMatrixElementsSum;
