package com.Eco.Ecoshop.Controller;

import com.Eco.Ecoshop.Modele.Cart;
import com.Eco.Ecoshop.Service.CartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @PostMapping
    public Cart createCart() {
        return cartService.createCart();
    }

    @PostMapping("/{cartId}/items/{productId}")
    public void addItemToCart(@PathVariable Long cartId, @PathVariable Long productId, @RequestParam int quantity) {
        cartService.addItemToCart(cartId, productId, quantity);
    }

    @DeleteMapping("/{cartId}/items/{cartItemId}")
    public void removeItemFromCart(@PathVariable Long cartId, @PathVariable Long cartItemId) {
        cartService.removeItemFromCart(cartId, cartItemId);
    }

    @GetMapping("/{cartId}")
    public Cart getCart(@PathVariable Long cartId) {
        return cartService.getCart(cartId);
    }

    @GetMapping("/{cartId}/total")
    public double calculateTotalPrice(@PathVariable Long cartId) {
        return cartService.calculateTotalPrice(cartId);
    }
}
