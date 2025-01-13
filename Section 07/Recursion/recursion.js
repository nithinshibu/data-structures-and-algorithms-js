function countDown(number) {
  //base case - point where the execution should be stopped
  if (number === 0) {
    console.log("reached the end!");
    return;
  }
  console.log(number);
  countDown(number - 1);
}

// function factorial(number) {
//   if (number === 0) {
//     return 1;
//   }
//   return number * factorial(number - 1);
// }

const factorial = (number) =>
  number === 0 ? 1 : number * factorial(number - 1);

countDown(5);
console.log(factorial(5));
