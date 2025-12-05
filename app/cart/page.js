'use client';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';

export default function CartPage() {
  const { cart } = useCart();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Your cart is empty</h2>
        <Link href="/">Go back to Home</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            border: '1px solid #ddd',
            padding: '10px',
            marginBottom: '10px',
          }}
        >
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>
          <img src={item.image} width={150} />
        </div>
      ))}
    </div>
  );
}
