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
  let newArr = arr.slice().sort((a, b) => a -b);

  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] === -1) {
      let arr1 = newArr.slice(0, newArr.indexOf(-1));
      let arr2 = newArr.slice(newArr.indexOf(-1) + 1, i + 1);
      let arr3 = newArr.slice(i + 1);
      if (arr1.length === 0 && arr2.length === 0) {
      } else
        newArr = arr1.concat(arr2.concat([-1].concat(arr3)));
    }
  }

  return newArr
}

