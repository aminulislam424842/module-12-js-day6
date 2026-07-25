function countOdd(array) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      count++;
    }
  }
  return count;
}

let odd = [45, 2, 48, 23, 56, 12];
let result = countOdd(odd);
console.log(result);