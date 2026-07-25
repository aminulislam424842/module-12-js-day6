// Input:
// [2, 3, 2, 5, 3, 6]

// Output:
// [2, 3, 5, 6]

function duplicates (num) {
 let number = [];
 for(let i = 0;i<num.length;i++){
  if (!number.includes(num[i])){
    number.push(num[i]);
  }
 }
 return number;
}
let num = [2, 3, 2, 5, 3, 6];
let result = duplicates(num);
console.log(result);