function passwordStrengthChecker(pass) {
  let hasUpperCase = false;
  let hasNumber = false;
  let hasSymbol = false;

  for (let i = 0; i < pass.length; i++) {
    let char = pass[i];

    if (char >= "A" && char <= "Z") {
      hasUpperCase = true;
    }
    else if (char >= "0" && char <= "9") {
      hasNumber = true;
    }
    else if (char === "!" || char === "@" || char === "$" || char === "*" || char === "&" || char === "#" || char === "%" || char === "^" || char === "_") {
      hasSymbol = true;
    }
  }

  if (pass.length >= 8 && hasNumber && hasSymbol && hasUpperCase) {
    return "Strong password";
  }
  else if (pass.length < 8) {
    return "Password must be at least 8 characters.";
  }
  else {
    return "Weak Password"
  }
}
console.log(passwordStrengthChecker("Ami##nul%231"))
console.log(passwordStrengthChecker("aminul12"))
console.log(passwordStrengthChecker("Ami##n"))