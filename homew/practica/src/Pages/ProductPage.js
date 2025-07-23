import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import './ProductPage.css';

function ProductPage() {
  const { id } = useParams();
  const product = products.find(p => p.id === id);
  return (
    <div className="product-page">
      <Link to="/">← Назад</Link>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p><strong>Ціна:</strong> {product.price}</p>
      <p>{product.opisanie}</p>
    </div>
  );
}

export default ProductPage;
