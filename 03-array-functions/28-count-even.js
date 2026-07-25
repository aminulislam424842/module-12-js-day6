function countEven(even) {
  let count = 0;

  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      count++;
    }
  }
  return count;
}

let even = [45, 2, 48, 23, 56, 12];
let result = countEven(even);

console.log(result);