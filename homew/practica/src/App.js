import React from 'react';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import ProductPage from './Pages/ProductPage';
import CategoryPage from './Pages/CategoryPage';
import NewsPage from './Pages/NewsPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/news/:id" element={<NewsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
