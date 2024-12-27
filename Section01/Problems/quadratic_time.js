//Nested loop :- O(n^2)
function findPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      console.log(`Pair:${arr[i]} and ${arr[j]}`);
    }
  }
  //O(n)
  for (let q = 0; q < arr.length; q++) {
    console.log("----", q);
  }

  //But the Big O here will be O(n^2)
}

const numbers = [1, 2, 3, 4, 5];
findPairs(numbers);

/*

Here in this example , in the same function we have O(n2).and O(n) , so if we combine all the O operations , it becomes O(n2+n).

Here  O(n2) is a dominant term and “n” is a non dominant term.

So we remove the non-dominant term and we are only left with  O(n2) and this way we simplify our Big O Notation.


*/
