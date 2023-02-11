module.exports = function check(str, bracketsConfig) {
  const arrLeft = [];
  const arrRight = [];
  let arr = str.split("");
  for (let i = 0; i < bracketsConfig.length; i++) {
    arrLeft.push(bracketsConfig[i][0]);
    arrRight.push(bracketsConfig[i][1]);
  }
  const fun = (arr) => {
    for (let j = 1; j < arr.length; j++) {
      let last = arr[j - 1];
      let indexLast = arrLeft.indexOf(last);
      let curent = arr[j];
      let indexCurent = arrRight.indexOf(curent);
      if (!(arrLeft.includes(curent) && indexLast !== indexCurent)) {
        if (!(indexCurent == indexLast)) return false;
        if (arrRight.includes(last) && curent !== last) return false;
        arr.splice([j - 1], 2);
        if (arr.length == 0) return true;
        return fun(arr);
      }
    }
    return false;
  };
  return fun(arr);
};
