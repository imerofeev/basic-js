module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error;

  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
      i++;
      break;

      case '--discard-prev':
      tempArr.pop();
      break;

      case '--double-next':
      if (i < arr.length - 1) {
        tempArr.push(arr[i + 1]);
      }
      break;

      case '--double-prev':
      if (i > 0) {
        tempArr.push(arr[i - 1]);
      }
      break;

      default:
      tempArr.push(arr[i]);
    }
  }
  return tempArr;
};
