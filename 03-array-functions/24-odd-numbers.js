function oddNumber(array) {
  let odd = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      odd.push(array[i]);
    }
  }
  return odd;
}

let array = [4, 5, 8,1,9,45,75,12];
let result = oddNumber(array);
console.log(result);
