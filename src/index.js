module.exports = function check1(str, bracketsConfig) {
  const stack = [];
  const config = {};
  for (let i = 0; i < bracketsConfig.length; i++) {
    config[bracketsConfig[i][0]] = bracketsConfig[i][1];
  }
  for (let j = 0; j < str.length; j++) {
    if (config[stack[stack.length - 1]] == str[j]) {
      stack.pop();
    } else {
      stack.push(str[j]);
    }
  }
  return stack.length === 0;
};
