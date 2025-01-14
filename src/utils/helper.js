/**
 *
 * @param {Array<string>} arr1
 * @param {Array<string>} arr2
 * @returns {boolean}
 */
function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i = +1) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  compareArrays,
};
