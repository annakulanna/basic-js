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
  let arrNumber = n.toString().split('').map(item => Number(item));
  const minItem = Math.min.apply(null, arrNumber);
  delete arrNumber[arrNumber.lastIndexOf(minItem)];
  return Number(arrNumber.filter(item => item != undefined).join(''));
}
