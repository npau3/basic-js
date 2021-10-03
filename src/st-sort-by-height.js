import { NotImplementedError } from '../extensions/index.js';

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
 export default function sortByHeight(arr) {
  const arrOne = [];
  let result = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] === -1) {
      arrOne.push(i);
    }
  }
  result = arr.filter((el) => el !== -1);
  result.sort((a, b) => {
    Array.isArray(result);
    return a - b;
  });
  for (let i = 0; i < arrOne.length; i += 1) {
    result.splice(arrOne[i], 0, -1);
  }
  return result;
}
