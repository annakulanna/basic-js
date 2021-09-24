import { NotImplementedError } from '../extensions/index.js';

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
export default function minesweeper (matrix) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}


/*function minesweeper(matrix) {
  let array = matrix.slice();

  for (let i = 1; i < matrix.length - 1; i++) {
    for (let j = 1; j < matrix.length - 1; j++) {
      let min = 0;
      
        if (matrix[i][j])
          min++;
        if (matrix[i - 1][j])
          min++;
        if (matrix[i + 1][j])
          min++;
        if (matrix[i][j - 1])
          min++;
        if (matrix[i][j + 1])
          min++;
      array[i][j] = min;
    }
  }

  for (let j = 0; j < matrix.length; j++){
    let min = 0;
    array[0][j] = min;
  }

  return array;
}*/
