package com.Eco.Ecoshop.Controller;
import com.Eco.Ecoshop.Modele.CartItem;
import com.Eco.Ecoshop.Service.CartItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/carts/{cartId}/items")
public class CartItemController {

    @Autowired
    private CartItemService cartItemService;

    // Ajouter un article au panier
    @PostMapping
    public ResponseEntity<CartItem> addItemToCart(@PathVariable Long cartId, @RequestBody CartItem cartItem) {
        CartItem newCartItem = cartItemService.addItemToCart(cartId, cartItem);
        return ResponseEntity.status(201).body(newCartItem);
    }

    // Supprimer un article du panier
    @DeleteMapping("/{itemId}")
    public ResponseEntity<Void> removeItemFromCart(@PathVariable Long cartId, @PathVariable Long itemId) {
        cartItemService.removeItemFromCart(cartId, itemId);
        return ResponseEntity.noContent().build();
    }

    // Récupérer tous les articles d'un panier
    @GetMapping
    public ResponseEntity<List<CartItem>> getItemsFromCart(@PathVariable Long cartId) {
        List<CartItem> items = cartItemService.getItemsFromCart(cartId);
        return ResponseEntity.ok(items);
    }
}
