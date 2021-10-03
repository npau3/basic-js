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
  const result = [];
  let mines = 0;
  for (let i = 0; i < matrix.length; i += 1) {
    result[i] = [];
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] === true) {
        mines += 1;
      } else {
        if (matrix[i - 1] && matrix[i - 1][j - 1] && matrix[i - 1][j - 1] === true) {
          mines += 1;
        }
        if (matrix[i - 1] && matrix[i - 1][j] === true) {
          mines += 1;
        }
        if (matrix[i - 1] && matrix[i - 1][j + 1] && matrix[i - 1][j + 1] === true) {
          mines += 1;
        }
        if (matrix[i][j - 1] && matrix[i][j - 1] === true) {
          mines += 1;
        }
        if (matrix[i][j + 1] && matrix[i][j + 1] === true) {
          mines += 1;
        }
        if (matrix[i + 1] && matrix[i + 1][j - 1] && matrix[i + 1][j - 1] === true) {
          mines += 1;
        }
        if (matrix[i + 1] && matrix[i + 1][j] && matrix[i + 1][j] === true) {
          mines += 1;
        }
        if (matrix[i + 1] && matrix[i + 1][j + 1] && matrix[i + 1][j + 1] === true) {
          mines += 1;
        }
      }
      result[i].push(mines);
      mines = 0;
    }
  }
  return result;
}