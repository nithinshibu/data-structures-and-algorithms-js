const palindrome = (str) => {
  let reversedStr = str.split("").reverse().join("");
  if (str === reversedStr) {
    return `${str} is a palindrome`;
  }
  return `${str} is not a palindrome`;
};

console.log(palindrome("nithin")); //nithin is not a palindrome
console.log(palindrome("malayalam")); //malayalam is a palindrome
