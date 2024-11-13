import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { CartProvider } from '../contexts/CartContext';
import Cart from './Cart';

describe('Cart component', () => {
  const product = {
    id: 1,
    name: 'Test Product',
    price: 100,
    image: 'test-image.jpg',
    quantity: 1,
  };

  test('renders Cart component with no items', () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    expect(screen.getByText('Le panier est vide')).toBeInTheDocument();
  });

  test('adds a product to the cart and displays it', () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    // Simuler l'ajout du produit
    fireEvent.click(screen.getByText('Ajouter au panier'));

    // Vérifier que le produit est ajouté et affiché
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('100 €')).toBeInTheDocument();
  });

  test('calculates the total price correctly', () => {
    render(
      <CartProvider>
        <Cart />
      </CartProvider>
    );

    // Simuler l'ajout de deux produits
    fireEvent.click(screen.getByText('Ajouter au panier'));
    fireEvent.click(screen.getByText('Ajouter au panier'));

    // Vérifier que le prix total est correct
    expect(screen.getByText('Prix total: 200 €')).toBeInTheDocument();
  });
});
