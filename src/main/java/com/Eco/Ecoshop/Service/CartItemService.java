package com.Eco.Ecoshop.Service;

import com.Eco.Ecoshop.Modele.CartItem;
import com.Eco.Ecoshop.Modele.Cart;
import  com.Eco.Ecoshop.Repo.CartItemRepository;
import  com.Eco.Ecoshop.Repo.CartRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartItemService {

    @Autowired
    private CartItemRepository cartItemRepository;

    @Autowired
    private CartRepository cartRepository;

    public CartItem addItemToCart(Long cartId, CartItem cartItem) {
        Cart cart = cartRepository.findById(cartId).orElseThrow(() -> new RuntimeException("Panier non trouvé"));
        cartItem.setCart(cart); // Association de l'article avec le panier
        return cartItemRepository.save(cartItem);
    }

    public void removeItemFromCart(Long cartId, Long itemId) {
        cartItemRepository.deleteById(itemId);
    }

    public List<CartItem> getItemsFromCart(Long cartId) {
        return cartItemRepository.findByCartId(cartId);
    }
}
