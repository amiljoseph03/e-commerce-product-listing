'use client';
import { use } from 'react';
import { products } from '@/data/products';
import Link from 'next/link';
// import '.../styles/producttt.css';
import '@/app/styles/producttt.css';


function getParams(paramsPromise) {
  return use(paramsPromise); 
}

export default function ProductDetails({ params}) {
  const resolvedParams = getParams(params); 
  const productId = parseInt(resolvedParams.id, 10);
  const product = products.find((p) => p.id === productId);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className='one'>
      <Link href="/"> Back to Home</Link>
      <h1>{product.name}</h1>
      <p>₹{product.price}</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} width={400} />
      <button>Add to Cart</button>
    </div>
  );
}


// export default async function ProductDetails({ params }) {
//   const res = await fetch(`http://localhost:3000/api/products/${params.id}`, {
//     cache: 'no-store',
//   });
//   const product = await res.json();

//   if (!product.id) return <h2>Product not found</h2>;

//   return (
//     <div>
//       <h1>{product.name}</h1>
//       <p>₹{product.price}</p>
//       <p>{product.description}</p>
//       <img src={product.image} alt={product.name} width={400} />
//     </div>
//   );
// }
