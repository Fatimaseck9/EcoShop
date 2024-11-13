import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';

const TestComponent = () => {
  const { cartItems, addToCart } = useCart();
  
  return (
    <div>
      <button onClick={() => addToCart({ id: 1, name: 'Test Product', price: 100, quantity: 1 })}>
        Ajouter au panier
      </button>
      <div data-testid="cart-items">
        {cartItems.map((item, index) => (
          <div key={index}>
            <span>{item.name}</span>
            <span>{item.price} €</span>
          </div>
        ))}
      </div>
    </div>
  );
};

describe('CartContext', () => {
  test('adds a product to the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Ajouter un produit au panier
    fireEvent.click(screen.getByText('Ajouter au panier'));

    // Vérifier que le produit est ajouté au panier
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();
  });

  test('handles multiple items in the cart', () => {
    render(
      <CartProvider>
        <TestComponent />
      </CartProvider>
    );

    // Ajouter deux produits au panier
    fireEvent.click(screen.getByText('Ajouter au panier'));
    fireEvent.click(screen.getByText('Ajouter au panier'));

    // Vérifier que deux produits sont dans le panier
    expect(screen.getAllByText('Test Product').length).toBe(2);
  });
});
