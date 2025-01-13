function wordCounter(text) {
  const lowerText = text.toLowerCase();
  const wordMap = {};
  const words = lowerText.split(" ");
  for (const word of words) {
    if (word in wordMap) {
      wordMap[word]++;
    } else {
      wordMap[word] = 1;
    }
  }
  return wordMap;
}

const text = "Hello my name name name is Nithin";
console.log(wordCounter(text));
