import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Header from './components/Header.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarrPage from './components/CarrPage.jsx';
import CategoryPage from './components/CategoryPage.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} /> {/* Usa element en lugar de component */}
      <Route path="/cart" element={<CarrPage />} /> {/* Usa element en lugar de component */}
      <Route path="/category" element={<CategoryPage />} />
    </Routes>
  </BrowserRouter>,
)