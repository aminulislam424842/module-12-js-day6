function salaryCalculator(basic, allowance, deductions) {
  if (basic < 0 || allowance < 0 || deductions < 0) {
    return "Invalid Input";
  }

  let finalSalary = basic + allowance - deductions;

  if(finalSalary<0){
    return "Input Valid Deductions";
  }
  return finalSalary;
}
console.log(salaryCalculator(20000, 4400, 1000));