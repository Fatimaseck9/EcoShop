// src/pages/Home.js
import React from 'react';
import './Home.css';


const Home = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h2>Bienvenue sur EcoShop</h2>
        <p>EcoShop est une plateforme d’e-commerce spécialisée dans les produits écologiques, pour consommer de manière responsable et durable.</p>
      </header>

      <section className="search-bar">
        <input type="text" placeholder="Rechercher un produit" className="search-input" />
        <button className="search-button">Rechercher</button>
      </section>

      <section className="cta">
        <h3>Acheter Maintenant</h3>
        <p>Découvrez notre sélection de produits écologiques !</p>
        <button className="cta-button">Acheter Maintenant</button>
      </section>

      <section className="categories">
        <h3>Catégories</h3>
        <div className="category-list">
          <div className="category-item">
            <img src="https://i.pinimg.com/474x/d6/ca/9f/d6ca9fc1a899b453f5403661dda94776.jpg" alt="Maison durable" className="category-image" />
            <p>Maison durable</p>
          </div>
          <div className="category-item">
            <img src="https://i.pinimg.com/474x/0e/cf/34/0ecf3412670ba9adbc960d084e0c7b85.jpg" alt="Beauté et soins" className="category-image" />
            <p>Beauté et soins</p>
          </div>
          <div className="category-item">
            <img src="https://i.pinimg.com/474x/b4/e9/02/b4e9029aaded0246a85e4115c990834c.jpg" alt="Jardin et extérieur" className="category-image" />
            <p>Jardin et extérieur</p>
          </div>
          <div className="category-item">
            <img src="https://i.pinimg.com/474x/dd/e0/88/dde0881f5ad6d8ee0d034f909e97973b.jpg" alt="Alimentation bio" className="category-image" />
            <p>Alimentation bio</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
