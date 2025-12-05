import { products } from '@/data/products';
import './styles/home.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      {/* <h1>NEST - For Your Home Decor</h1>
      <h1>🛒 Let's Shop</h1> */}
<section class="home-section">
  <div class="overlay">
    <h1>NEST </h1>
     <h1> For Your Home Decor</h1>
    <h2>🛒 Let's Shop</h2>
    <p>Browse our collection and find the perfect pieces for your home.</p>
    <a href="/products" class="shop-btn">Shop Now</a>
  </div>
</section>

<style>

</style>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>₹ {product.price}</p>

            {/* <button>View Details</button> */}

            <Link href={`/products/${product.id}`}>
              <button>View Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
