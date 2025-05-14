import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      {/* Menú lateral (Carrito) */}
      <aside className="cart">
        <h2 className="logo">Pet Shop</h2>
        <nav className="menu">
          <ul>
            <li>
              <span className="material-symbols-outlined">shopping_cart</span>{" "}
              Carrito
            </li>
            <li>
              <span className="material-symbols-outlined">inventory</span>{" "}
              Productos
            </li>
            <li>
              <span className="material-symbols-outlined">info</span> Sobre
              Nosotros
            </li>
            <li>
              <span className="material-symbols-outlined">account_circle</span>{" "}
              Mi Perfil
            </li>
          </ul>
        </nav>
        <div className="logout-faq">
          <button className="logout-button">Cerrar Sesión</button>
          <div className="faq-box">Preguntas Frecuentes</div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        <header className="header">
          <h1>
            Bienvenid@ <span className="user-name">Nombre</span>
          </h1>
          <div className="icons">
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">person</span>
          </div>
        </header>

        <section className="banner">
          <img
            src="/dog-banner.jpg"
            alt="Perro en flores"
            className="banner-image"
          />
          <div className="info-box">
            <p>Para más información</p>
            <button className="contact-btn">Contáctanos</button>
            <img src="/dog.png" alt="perro" className="info-dog" />
          </div>
        </section>

        <div className="search-bar">
          <button className="search-icon">🐾</button>
          <input type="text" placeholder="Alfombras" />
          <button className="search-btn">🔍</button>
        </div>

        <section className="categories">
          <h3 className="section-title">Podés encontrar...</h3>
          <div className="category-grid">
            <div className="category-card">
              <img src="/ropa-perro.png" alt="Ropa perro" />
              <p>Ropa</p>
            </div>
            <div className="category-card">
              <img src="/collar.png" alt="Collar XL" />
              <p>Collar XL</p>
            </div>
            <div className="category-card">
              <img src="/juguete.png" alt="Juguete" />
              <p>Juguete</p>
            </div>
          </div>
        </section>

        <section className="rating-section">
          <h3>Valoración</h3>
          <div className="rating-item">
            <img src="/fama1.jpg" alt="Fama 1" />
            <span>Fama 1</span>
          </div>
          <div className="rating-item">
            <img src="/fama2.jpg" alt="Fama 2" />
            <span>Fama 2</span>
          </div>
          <div className="rating-item">
            <img src="/fama3.jpg" alt="Fama 3" />
            <span>Fama 3</span>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
