const flip = (d, a) => {
  let returnValue;
  //TODO
  if (d === 'R')
    returnValue = a.sort(function (a, b) {
      return a - b;
    });
  else
    returnValue = a.sort(function (a, b) {
      return b - a;
    });
  return returnValue;
};
