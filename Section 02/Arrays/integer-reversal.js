const reverseInteger = (intValue) => {
  let reverseStr = intValue.toString().split("").reverse().join("");
  console.log(Number(reverseStr)); //1234 -> 4321 , -1234 -> NaN
  //console.log(parseInt(reverseStr) * Math.sign(intValue)); //1234 -> 4321 , -1234 -> -4321
};

reverseInteger(1234);
//reverseInteger(-1234);
