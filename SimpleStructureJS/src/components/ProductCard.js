export default function ProductCard(product) {
return `
<div class="card">
<img src="assets/logo.png" alt="product" />
<h3>${product.name}</h3>
<p>₱${product.price}</p>
 <button onclick="addToCart()">Add to Cart</button>
</div>
`;
}