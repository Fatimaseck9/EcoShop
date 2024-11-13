// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import ProductPage from './pages/ProductsPage';
import { CartProvider } from './contexts/CartContext'; // import CartProvider

function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
