module.exports = function check(str, bracketsConfig) {
  let stack = [];

  for (let i = 0; i < str.length; i += 1) {
    const currentSymbol = str[i];

    for (let arr of bracketsConfig) {
      const topStackItem = stack[stack.length - 1];

      // Special Case
      if (currentSymbol === arr[0] && currentSymbol === arr[1]) {
        if (currentSymbol === topStackItem) {
          stack.pop();
        } else {
          stack.push(currentSymbol);
        }
      }

      // Opening Bracket
      if (currentSymbol === arr[0] && currentSymbol !== arr[1]) {
        stack.push(currentSymbol);
      }

      // Closing Bracket
      if (currentSymbol === arr[1] && currentSymbol !== arr[0]) {
        if (stack.length === 0) {
          return false;
        } else {
          if (topStackItem === arr[0]) {
            stack.pop();
          } else {
            return false;
          }
        }
      }

    }
  }
  return stack.length === 0;
}