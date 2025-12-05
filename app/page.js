import { products } from '@/data/products';
import './styles/home.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <h1>🛒 Let's Shop</h1>

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
