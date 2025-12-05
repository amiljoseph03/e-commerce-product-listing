


'use client';

import { useCart } from '@/app/context/CartContext';
import Link from 'next/link';
import '@/app/styles/cart.css';

export default function CartPage() {
  const { cart } = useCart() || { cart: [] };

  if (!cart || cart.length === 0) {
    return (
      <div className="empty-cart">
        <h2>Your cart is empty</h2>
        <Link href="/">
          <button className="back-home-btn">Go back to Home</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
