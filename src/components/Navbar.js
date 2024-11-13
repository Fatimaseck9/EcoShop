// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';


const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-logo">
      <h1>EcoShop</h1>
    </div>
    <ul className="navbar-links">
      <li><Link to="/">Accueil</Link></li>
      <li><Link to="/product">Produits</Link></li>
      <li><Link to="/cart">Panier</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </nav>
);

export default Navbar;
