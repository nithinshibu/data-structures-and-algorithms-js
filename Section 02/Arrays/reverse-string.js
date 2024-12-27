//Brute Force Approach O(n)
// const str = "Hello";
// const strArr = [];
// let j = 0;
// for (let i = str.length - 1; i >= 0; i--) {
//   strArr[j] = str[i];
//   j++;
// }

// console.log(strArr.join().replaceAll(",", ""));

const reverseString = (str) => str.split("").reverse().join("");

console.log(reverseString("hello")); //olleh

const reverseWords = (words) =>
  words.split(" ").reverse().join().replaceAll(",", " ");

console.log(reverseWords("I am Nithin")); //Nithin am I
