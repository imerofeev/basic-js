module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error;
  }

  if (!arr.length) {
    return [];
  }

  let tempArr = [];
  let arrIndex = arr.slice(0, arr.length);

  for (var i = 0; i < arrIndex.length; i++) {
    switch (arrIndex[i]) {
      case '--double-next':
        if (i < arrIndex.length - 1) {
          arrIndex[i] = arrIndex[i + 1];
        } else {
          arrIndex[i] = undefined;
        }
        continue;

      case '--double-prev':
        arrIndex[i] = undefined;
        if (i > 0 && arrIndex[i - 1] !== undefined) {
          arrIndex[i] = arrIndex[i - 1];
        } else {
          arrIndex[i] = undefined;
        }
        continue;

      case '--discard-next':
        arrIndex[i] = undefined;
        arrIndex[i + 1] = undefined;
        continue;

      case '--discard-prev':
        arrIndex[i] = undefined;
        arrIndex[i - 1] = undefined;
        continue;
    }
  }

  arrIndex.forEach((item) => {
    if (item !== undefined) {
      tempArr.push(item);
    }
  })

  return tempArr;
};
