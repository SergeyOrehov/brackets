module.exports = function check1(str, bracketsConfig) {
  const stack = [];
  const config = {};
  let current;
  for (let i = 0; i < bracketsConfig.length; i++) {
    config[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let j = 0; j < str.length; j++) {
    current = str[j];
    let index = stack[stack.length - 1];
    if (config[index] == current) {
      stack.pop();
    } else {
      stack.push(current);
    }
  }
  return stack.length === 0;
};
