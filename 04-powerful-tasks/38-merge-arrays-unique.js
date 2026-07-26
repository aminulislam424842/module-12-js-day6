function mergeArrayUnique(num, num1) {

  let number = [];
  let marge = num.concat(num1);

  for (let i = 0; i < marge.length; i++) {
    if (!number.includes(marge[i])) {
      number.push(marge[i]);
    }
  }

  return number;

}

let num = [4, 5, 7, 3, 2, 4];
let num1 = [4, 5, 8, 9, 12, 3, 5];
let result = mergeArrayUnique(num, num1);
console.log(result);