import React from 'react';
import { Link } from 'react-router-dom';
import { news } from '../data';
import './NewsList.css';

function NewsList() {
  return (
    <div className="news-block">
      <h2>Новини</h2>
      <ul>
        {news.map(item => (
          <li key={item.id}>
            <Link to={`/news/${item.id}`} className="news-link">
              <strong>{item.title}</strong>
              <p>{item.short}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NewsList;
