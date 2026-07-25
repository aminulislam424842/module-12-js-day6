function electricity (units){
  if(units<=50){
    let price = 5.32;
    let bill = price*units;
    return bill;
  }
  else if(units<=75){
    let price = 6.18;
    let bill = price*units;
    return bill;
  }
  else if(units<=200){
    let price = 8.50;
    let bill = price*units;
    return bill;
  }
  else if(units<=300){
    let price = 9.10;
    let bill = price*units;
    return bill;
  }
  else if(units<=400){
    let price = 9.62;
    let bill = price*units;
    return bill;
  }
  else if(units<=600){
    let price = 15.01;
    let bill = price*units;
    return bill;
  }
  else{
    let price = 17.35 ;
    let bill = price*units;
    return bill;
  }
}

console.log(electricity(500));