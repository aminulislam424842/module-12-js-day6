function averageArray(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }

  let average = sum / array.length;
  return average;
}
let array = [1, 2, 3, 5, 7, 8, 6];

const result = averageArray(array);

console.log(result);