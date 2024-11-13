// src/contexts/CartContext.js
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart or update the quantity if already exists
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex(item => item.id === product.id);

      if (existingItemIndex !== -1) {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        return updatedItems;
      } else {
        const newItem = { ...product, quantity: 1 };
        return [...prevItems, newItem];
      }
    });
  };

  // Clear the cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate the total price of the cart
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
