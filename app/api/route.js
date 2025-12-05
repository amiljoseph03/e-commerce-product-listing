import { products } from '@/data/products';

export async function GET(req) {
  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
