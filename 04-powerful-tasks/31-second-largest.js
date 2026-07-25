function secondLargest(number) {
  let largest = number[0];
  let secondLargest = -Infinity;

  for (let i = 1; i < number.length; i++) {

    if (number[i] > largest) {
      secondLargest = largest;
      largest = number[i];
    }

    else if (number[i] > secondLargest && number[i] !== largest) {
      secondLargest = number[i];
    }
  }

  return secondLargest;
}

let number = [1000, 12, 5, 12, 454, 35, 748];

console.log(secondLargest(number));