// src/pages/ProductPage.js
import React, { useEffect, useState } from 'react';
import './ProductPage.css';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8081/api/products');
        if (!response.ok) {
          throw new Error('Erreur de réseau');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.name} ajouté au panier`);
  };

  if (error) {
    return <div>Une erreur est survenue : {error}</div>;
  }

  return (
    <div className="product-page">
      <h2>Nos Produits</h2>
      <div className="product-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h4>{product.name}</h4>
            <p>{product.price} €</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>
   
    </div>
  );
};

export default ProductPage;
