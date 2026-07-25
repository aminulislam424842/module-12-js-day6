function positiveNegative(n) {
  if (n === 0) {
    return "Zero";
  }
  else if (n > 0) {
    return "Positive";
  }
  else {
    return "Negative";
  }
}

console.log(positiveNegative(0));