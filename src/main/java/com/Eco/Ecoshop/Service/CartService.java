package com.Eco.Ecoshop.Service;

import com.Eco.Ecoshop.Modele.Cart;
import com.Eco.Ecoshop.Modele.CartItem;
import com.Eco.Ecoshop.Modele.Product;
import  com.Eco.Ecoshop.Repo.CartRepository;
import  com.Eco.Ecoshop.Repo.CartItemRepository;
import  com.Eco.Ecoshop.Repo.ProductRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private ProductRepository productRepository;

    public Cart createCart() {
        Cart cart = new Cart();
        return cartRepository.save(cart);
    }

    public void addItemToCart(Long cartId, Long productId, int quantity) {
        Optional<Cart> cartOpt = cartRepository.findById(cartId);
        Optional<Product> productOpt = productRepository.findById(productId);

        if (cartOpt.isPresent() && productOpt.isPresent()) {
            Cart cart = cartOpt.get();
            Product product = productOpt.get();
            CartItem cartItem = new CartItem();
            cartItem.setProduct(product);
            cartItem.setQuantity(quantity);
            cartItem.setCart(cart);
            cart.addItem(cartItem);
            cartRepository.save(cart); // Save cart to persist changes
        }
    }

    public void removeItemFromCart(Long cartId, Long cartItemId) {
        Optional<Cart> cartOpt = cartRepository.findById(cartId);
        if (cartOpt.isPresent()) {
            Cart cart = cartOpt.get();
            CartItem cartItem = cartItemRepository.findById(cartItemId).orElse(null);
            if (cartItem != null) {
                cart.removeItem(cartItem);
                cartItemRepository.delete(cartItem); // Optionally delete the item from repository
                cartRepository.save(cart); // Save cart to persist changes
            }
        }
    }

    public Cart getCart(Long cartId) {
        return cartRepository.findById(cartId).orElse(null);
    }

    public double calculateTotalPrice(Long cartId) {
        Cart cart = getCart(cartId);
        return (cart != null) ? cart.calculateTotalPrice() : 0.0;
    }
}
