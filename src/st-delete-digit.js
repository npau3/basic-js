import { NotImplementedError } from '../extensions/index.js';

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
 export default function deleteDigit(n) {
  let arr = n.toString().split('');
  const resultArray = [];
  for (let i = 0; i < arr.length; i += 1) {
    arr.splice(i, 1);
    resultArray.push(arr.join(''));
    arr = n.toString().split('');
  }
  resultArray.sort((a, b) => {
    Array.isArray(resultArray);
    return b - a;
  });
  return parseInt(resultArray[0], 10);
}