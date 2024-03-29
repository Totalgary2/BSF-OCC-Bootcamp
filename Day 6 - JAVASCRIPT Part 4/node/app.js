//Main application app.js

const product = require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');


//Add products to the cart
cart.addToCart(product[0]);
cart.addToCart(product[2]);

//Display the cart items
console.log('Cart Items', cart.getCartItems());

//Calculate and display the order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log("Total order amount", totalAmount);