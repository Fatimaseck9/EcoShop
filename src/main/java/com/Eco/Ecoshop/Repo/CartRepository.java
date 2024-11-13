package com.Eco.Ecoshop.Repo;

import com.Eco.Ecoshop.Modele.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Long> {
}
