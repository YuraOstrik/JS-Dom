import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { news } from '../data';
import './NewsPage.css';

function NewsPage() {
  const { id } = useParams();
  const item = news.find(n => n.id === id);
  return (
    <div className="news-page">
      <Link to="/">← Назад</Link>
      <h2>{item.title}</h2>
      <p>{item.full}</p>
    </div>
  );
}

export default NewsPage;
