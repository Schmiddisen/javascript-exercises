const removeFromArray = function (array, ...values) {
  for (let i = 0; i < array.length; i++) {
    for (let o = 0; o < values.length; o++) {
      if (array[i] === values[o]) {
        array.splice(i, 1);
        i--;
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
