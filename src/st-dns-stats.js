import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 export default function getDNSStats(domains) {
  const objectRes = {};
  let arr = [];
  for (let i = 0; i < domains.length; i += 1) {
    arr = domains[i].split('.');
    let temp = '';
    for (let j = arr.length - 1; j >= 0; j -= 1) {
      temp += `.${arr[j]}`;
      if (!objectRes[temp]) {
        objectRes[temp] = 1;
      } else {
        objectRes[temp] += 1;
      }
    }
  }
  return objectRes;
}