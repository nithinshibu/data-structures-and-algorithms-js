const isValidParenthesis = (str) => {
  //using this only for the opening brackets
  const stack = [];
  const brackets = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  //loop through each character in the string

  for (let char of str) {
    if (brackets[char]) {
      //only storing into stack if it is an opening bracket
      stack.push(char);
    } else {
      //if it is the closing bracket then we have to check whether it matches the top of the stack
      const top = stack.pop();
      if (!top || brackets[top] !== char) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValidParenthesis("(){}[]")); //true
console.log(isValidParenthesis("({[]")); //false
console.log(isValidParenthesis("[]")); //true
console.log(isValidParenthesis("{]")); //false
