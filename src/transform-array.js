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
  if (arr.length === 0) {
    return arr;
  }
  const newArr = []
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === '--discard-next' && i === arr.length - 1) {
          continue;
      } else if (arr[i] === '--discard-next') {
          i++;
      } else if (arr[i] === '--discard-prev' && i === 0) {
          continue;
      } else if (arr[i] === '--discard-prev' && arr[i - 2] === '--discard-next') {
          continue;
      } else if (arr[i] === '--discard-prev') {
          newArr.pop();
      } else if (arr[i] === '--double-next' && i !== arr.length - 1) {
          newArr.push(arr[i + 1]); 
      } else if (arr[i] === '--double-next' && i === arr.length - 1) {
          continue;
      } else if (arr[i] === '--double-prev' && i === 0) {
          continue;
      } else if (arr[i] === '--double-prev' && arr[i - 2] === '--discard-next') {
          continue;
      } else if (arr[i] === '--double-prev') {
          newArr.push(arr[i - 1]);
      } else {
          newArr.push(arr[i]);
      }
  };
  return newArr;
}

module.exports = {
  transform
};
