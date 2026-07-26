function missingNumber(num) {
  let n = Math.max(...num);

  let missing = [];

  for (let i = 1; i <= n; i++) {
    if (!num.includes(i)) {
      missing.push(i)
    }
  }
  return missing;
}

let num = [1, 2, 3, 4, 5, 6, 8,10];
let result = (missingNumber(num));
console.log(result);