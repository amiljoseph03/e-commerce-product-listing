

'use client';

import { use } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import '@/app/styles/producttt.css';

function getParams(paramsPromise) {
  return use(paramsPromise);
}

export default function ProductDetails({ params }) {
  const resolvedParams = getParams(params);
  const productId = parseInt(resolvedParams.id, 10);

  const { addToCart } = useCart();

  const product = products.find((p) => p.id === productId);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="one">
      <Link href="/">Back to Home</Link>

      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} width={400} />

      <button onClick={() => addToCart(product)}>Add to Cart</button>

      <Link href="/cart">
        <button>View Cart</button>
      </Link>
    </div>
  );
}