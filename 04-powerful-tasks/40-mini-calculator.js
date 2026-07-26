function miniCalculator(a, b) {
  let add = a + b;
  let sub = a - b;
  let mul = a * b;

  let div;

  if (b === 0) {
    div = "Divide By Zero";
  } else {
    div = a / b;
  }

  return {
    add,
    sub,
    mul,
    div
  };
}

let result = miniCalculator(7, 0);
console.log(result);