// src/components/Footer.js
import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import './Footer.css';

const Footer = () => (
  <footer className="footer">
    <p>&copy; {new Date().getFullYear()} EcoShop. Tous droits réservés.</p>
    <div className="social-icons">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={30} />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={30} />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter size={30} />
      </a>
    </div>
  </footer>
);

export default Footer;
