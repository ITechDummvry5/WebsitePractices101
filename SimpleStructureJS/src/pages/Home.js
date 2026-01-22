import ProductCard from '../components/ProductCard.js';


export default function Home() {
const products = [
{ name: 'T-Shirt', price: 499 },
{ name: 'Shoes', price: 1999 },
{ name: 'Cap', price: 299 }
];


return `
<section class="products">
${products.map(p => ProductCard(p)).join('')}
</section>
`;
}