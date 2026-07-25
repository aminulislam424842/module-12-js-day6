function evenNumber(array) {
  let even = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      even.push(array[i]);
    }
  }
  return even;
}

let array = [4, 5, 8];
let result = evenNumber(array);
console.log(result);

