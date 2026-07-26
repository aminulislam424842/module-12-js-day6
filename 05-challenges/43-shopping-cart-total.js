function shoppingCartTotal(cart) {
  let grandTotal = 0;

  for (let key in cart) {
    let subPrice = cart[key].price;
    let subQuantity = cart[key].quantity;
    let subTotal = subPrice * subQuantity;
    console.log(cart[key].name, ":", subTotal);

    grandTotal += subTotal;
  }

  return grandTotal;
}

const cart = {
  product1: {
    name: "Uma Bag",
    color: "Black",
    price: 8200,
    quantity: 5
  },
  product2: {
    name: "Ruma Dress",
    color: "Black",
    price: 30600,
    quantity: 15
  },
  product3: {
    name: "Vivian Dress",
    color: "Abract Marble",
    price: 37400,
    quantity: 8
  },
  product4: {
    name: "Mila Dress",
    color: "Black/White",
    price: 45000,
    quantity: 10
  },
  product5: {
    name: "Woven Evening Clutch",
    color: " Gold",
    price: 13800,
    quantity: 12
  }
}

console.log("grand Total :", shoppingCartTotal(cart));