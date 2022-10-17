const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
     if (arr[i] === '--discard-next') {
      newArr = arr.splice(arr[i+1], 1)
     }
     if (arr[i] === '--discard-prev') {
      newArr = arr.splice(arr[i], 1)
     }
     if (arr[i] === '--double-next') {
      newArr = arr.splice(arr[i+1], 0, arr[i+1])
     }
     if (arr[i] === '--double-prev') {
      newArr = arr.splice(arr[i-1], 0, arr[i-1])
     }
  } return newArr
}

module.exports = {
  transform
};
