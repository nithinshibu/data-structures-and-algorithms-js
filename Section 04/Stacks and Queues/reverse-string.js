function reverseString(str) {
  return str.split(" ").reverse().join(" ");
}

function reverseCharacters(str) {
  let stack = [];
  for (let i = str.length; i >= 0; i--) {
    stack.push(str[i]);
  }
  return stack.join("");
}

function reverseCharactersAnotherWay(str) {
  let stack = [];
  for (let char of str) {
    stack.push(char);
  }
  let revStr = "";
  while (stack.length > 0) {
    revStr += stack.pop();
  }
  return revStr;
}

const reversedString = reverseString("hello world"); //world hello
const reversedWord = reverseCharacters("hello world"); //dlrow olleh
const reversedWordCh = reverseCharactersAnotherWay("hello world"); //dlrow olleh

console.log(reversedString);
console.log(reversedWord);
console.log(reversedWordCh);
