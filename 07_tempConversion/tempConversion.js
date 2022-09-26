const ftoc = function (temp) {
  //convert to celsius and save in variable
  convertedTemp = (temp - 32) * (5 / 9);
  //round to one decimal place and return it
  if (convertedTemp === 0) return parseFloat(convertedTemp);
  return parseFloat(convertedTemp.toFixed(1));
};

const ctof = function (temp) {
  //convert to fahrenheit and save in variable
  convertedTemp = temp * (9 / 5) + 32;
  //round to one decimal place and return
  if (convertedTemp === 0) return parseFloat(convertedTemp);
  return parseFloat(convertedTemp.toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
