import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryList.css';

function CategoryList({ categories }) {
  return (
    <div className="categories">
  {categories.map(category => (
  <Link key={category} to={`/category/${category}`} className="cat-link">
    {category}
  </Link>
))}

    </div>
  );
}

export default CategoryList;

