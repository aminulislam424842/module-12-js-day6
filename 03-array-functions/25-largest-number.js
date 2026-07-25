// use built-in method

function largestNumber(num) {
  let numbers = Math.max(...array);
  return numbers;
}
let array = [54, 874, 65, 35];
let result = (largestNumber(array));
console.log(result);


// use loop

function largestNum(number) {
  let largest = number[0];

  for (let i = 1; i < number.length; i++) {
    if (number[i] > largest) {
      largest = number[i];
    }
  }

  return largest;
}

let arr = [54, 874, 65, 35];
let big = largestNum(arr);

console.log(big);