function guessNumber(guess, target) {
  if (guess === target) {
    return "correct";
  }
  else if (guess > target) {
    return "Too High";
  }
  else {
    return "Too low"
  }
}
console.log(guessNumber(7, 18));