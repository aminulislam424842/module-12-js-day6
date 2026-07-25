// use built-in method

function smallestNumber(array) {
  let numbers = Math.min(...array);
  return numbers;
}
let array = [54, 874, 65, 35];
let result = (smallestNumber(array));
console.log(result);


// use loop

function smallestNum(number) {
  let smallest = number[0];

  for (let i = 1; i < number.length; i++) {
    if (number[i] < smallest) {
      smallest = number[i];
    }
  }

  return smallest;
}

let arr = [54, 874, 65, 35];
let big = smallestNum(arr);

console.log(big);