import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

function Card({ product }) {
  return (
    <div className="product-card">
      <img src={product.image}/>
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <Link to={`/product/${product.id}`}>Детальніше</Link>
    </div>
  );
}

export default Card;
