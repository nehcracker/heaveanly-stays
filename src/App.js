// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/styles/global.css';
import HomePage from './pages/HomePage/HomePage';
import CategoryPageStudio from './pages/HomePage/CategoryPage/CategoryPageStudio';
import CategoryPage from './pages/HomePage/CategoryPage/CategoryPage'; // Import the CategoryPage component
import CategoryPage2BR from './pages/HomePage/CategoryPage/CategoryPage2BR';
import CategoryPage3BR from './pages/HomePage/CategoryPage/CategoryPage3BR'; // Import the CategoryPage component

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:size" element={<HomePage />} />
          <Route path="/category/1brFurnishedApartment" element={<CategoryPage />} />
          <Route path="/category/2brFurnishedApartment" element={<CategoryPage2BR />} />
          <Route path="/category/3brFurnishedApartment" element={<CategoryPage3BR />} />
          <Route path="/category/studioFurnishedApartment" element={<CategoryPageStudio />} />

          {/* Add more routes as you develop category pages */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
