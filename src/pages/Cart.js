import React from 'react';
import { useCart } from '../contexts/CartContext';
import './Cart.css'; 

const Cart = () => {
  const { cartItems, calculateTotalPrice } = useCart();

  if (cartItems.length === 0) {
    return <div>Le panier est vide</div>;
  }

  const totalPrice = calculateTotalPrice(); // Calculer le prix total

  return (
    <div className="cart-page">
      <h2>Votre Panier</h2>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <img src={item.image} alt={item.name} className="cart-item-image" />
            <div className="cart-item-details">
              <h4>{item.name}</h4>
              <p>{item.price} €</p>
              <p>Quantité: {item.quantity}</p>
              <p>Total: {(item.price * item.quantity).toFixed(2)} €</p>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Prix total: {totalPrice.toFixed(2)} €</h3>
      </div>
    </div>
  );
};

export default Cart;
