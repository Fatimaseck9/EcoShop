package com.Eco.Ecoshop.Repo;


import com.Eco.Ecoshop.Modele.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {
}
