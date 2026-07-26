function bmiCalculator(wight, hight) {

  hight = hight / 100;

  let bmi = (wight / (hight ** 2));
  if (bmi <= 18.5) {
    return "Underweight";
  }
  else if (bmi <= 24.9) {
    return "Healthy Weight";
  }
  else if (bmi <= 29.9) {
    return "Overweight";
  }
  else {
    return "Obese";
  }
}
console.log(bmiCalculator(78, 180));