/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */

function minesweeper(matrix) {
  let newArr = [];
  newArr = matrix.map((elw, i) => elw.map((el, a) => {
    let bombs = 0;
    if (el !== true) {
      for (let y = -1; y <= 1; y++) {
        if (i + y >= 0 && i + y < matrix.length) {
          for (let x = -1; x <= 1; x++) {
            if (a + x >= 0 && a + x < elw.length) {
              if (matrix[i + y][a + x] === true) {
                bombs++;
              }
            }
          }
        }
      }
      return bombs;
    }
    return 1;
  }));
  return newArr;
}

module.exports = minesweeper;
