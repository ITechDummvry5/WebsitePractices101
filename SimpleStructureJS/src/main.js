// main.js
import App from './App.js';

document.getElementById('root').innerHTML = App();

let cartCount = 0;

// Make function global
window.addToCart = function () {
  cartCount++;
  document.getElementById('cart-count').textContent = `🛒 Cart (${cartCount})`;
};
