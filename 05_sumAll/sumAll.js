const sumAll = function (start, end) {
  //create variable added
  let added = 0;
  if (start > end) {
    let temp = "";
    temp = end;
    end = start;
    start = temp;
  } else if (start < 0 || end < 0) {
    return "ERROR";
  } else if (typeof start !== "number" || typeof end !== "number"){
    return "ERROR";
  }
  //create a loop between the two parameters
  for (; start <= end; start++) {
    //add the parameters and all numbers inbetween
    added += start;
  }
  //return added
  return added;
};

// Do not edit below this line
module.exports = sumAll;
