import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data';
import Card from '../Components/Card';
import './CategoryPage.css';

function CategoryPage() {
  const { category } = useParams();
  const items = products.filter(p => p.category === category);
  return (
    <div className="category">
      <Link to="/">← Назад</Link>
      <h2>{category}</h2>
      <div className="items">
        {items.map(p => <Card key={p.id} product={p} />)}
      </div>
    </div>
  );
}

export default CategoryPage;
