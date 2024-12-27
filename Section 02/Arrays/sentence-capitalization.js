const titleCaseConversion = (str) => {
  let convertedStr = str
    .toLowerCase()
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  console.log(convertedStr);
};

titleCaseConversion("hello world"); //Hello World
titleCaseConversion("HELLO WORLD"); //Hello World

//word.slice(1): Extracts the substring starting from index 1 to the end of the word (skipping the first character).

//const str = "Hello World";
//console.log(str.slice(0, 5));   // "Hello" (extracts from index 0 to 4)
//console.log(str.slice(6));      // "World" (extracts from index 6 to the end)

//const str = "Hello World";
//console.log(str.slice(-5));    // "World" (extracts the last 5 characters)
//console.log(str.slice(-11, -6)); // "Hello" (from index -11 to -6)

//If startIndex is greater than the length of the string, slice returns an empty string:
//const str = "Hello";
//console.log(str.slice(10));  // ""

//If startIndex is greater than or equal to endIndex, it also returns an empty string
//const str = "Hello";
//console.log(str.slice(3, 2)); // ""
