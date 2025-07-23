import React from 'react';
import { products, categories } from '../data';
import Card from '../Components/Card';
import CategoryList from '../Components/CategoryList';
import './Home.css';
import NewsList from '../Components/NewsList';

function Home() {
  return (
    <div className="home">
      <h1>Магазин крафтових товарів</h1>
      <CategoryList categories={categories} />
      <div className="product-list">
        {products.map(p => (
          <Card key={p.id} product={p} />
        ))}
      </div>
      <NewsList></NewsList>
    </div>
  );
}

export default Home;

