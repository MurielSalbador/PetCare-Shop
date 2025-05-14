import React from "react";
import "./Home.modules.css";

const Home = () => {
  const userName = "Juan"; // podés cambiarlo dinámicamente si querés

  return (
    <div className="home-wrapper">
      {/* Menú lateral */}
      <aside className="cart">
        <h2 className="logo">Pet Shop</h2>
        <nav className="menu">
          <ul>
            <li>
              <span className="material-symbols-outlined">shopping_cart</span>
              Carrito
            </li>
            <li>
              <span className="material-symbols-outlined">inventory</span>
              Productos
            </li>
            <li>
              <span className="material-symbols-outlined">info</span>
              Sobre Nosotros
            </li>
            <li>
              <span className="material-symbols-outlined">account_circle</span>
              Mi Perfil
            </li>
          </ul>
        </nav>
        <div className="logout-faq">
          <button className="logout-button">Cerrar Sesión</button>
          <div className="faq-box">
            <span className="material-symbols-outlined">help</span>
            Preguntas Frecuentes
          </div>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="main-content">
        {/* Encabezado */}
        <header className="header">
          <h1>
            Bienvenid@ <span className="user-name">{userName}</span>
          </h1>
          <div className="icons">
            <span className="material-symbols-outlined">notifications</span>
            <span className="material-symbols-outlined">person</span>
          </div>
        </header>

        {/* Banner informativo */}
        <section className="banner">
          <img
            src="https://media.discordapp.net/attachments/1229928429952958534/1372294864212987965/vecteezy_ai-generated-joyful-brown-rabbit-with-meadow-flower-crown-on_39088236.jpg?ex=682640af&is=6824ef2f&hm=0ab532c8695b67d0a27dc9a60449c79f818e98d8ce995b99e91edd5ca5f45dec&=&format=webp&width=985&height=552" 
            alt="conejo en flores"
            className="banner-image"
          />
          <div className="info-box">
            <p>Para más información</p>
            <button className="contact-btn">Contáctanos</button>
            <img src="/dog.png" alt="perro" className="info-dog" />
          </div>
        </section>

        {/* Buscador */}
        <div className="search-bar">
          <span className="paw-icon">🐾</span>
          <input type="text" placeholder="Alfombras" />
          <button className="search-btn">
            <span className="material-symbols-outlined">search</span>
          </button>
        </div>

        {/* Categorías */}
        <section className="categories">
          <h3 className="section-title">Podés encontrar...</h3>
          <div className="category-grid">
            <div className="category-card">
              <img src="https://images-ext-1.discordapp.net/external/jgfT9THR4G9fU0AezziPLgatDpmPg74OlcPckaUg4iM/https/http2.mlstatic.com/D_NQ_NP_800700-MLA45295950793_032021-O.webp?format=webp" alt="Juguete" />
              <p>Juguete</p>
            </div>
            <div className="category-card">
              <img src="https://images-ext-1.discordapp.net/external/KbZa9u9iZ-RstqHJqsIw_k4VzWoynST1pcb1BHbIa9g/https/http2.mlstatic.com/D_NQ_NP_716021-MLU70623130164_072023-O.webp?format=webp" alt="Collar XL" />
              <p>Collar XL</p>
            </div>
            <div className="category-card">
              <img src="https://images-ext-1.discordapp.net/external/YTViRazHbNOo-9YXNYpgQWA4a8BFgv8JqZv7PqHITh0/%3Fv%3D1717418852%26width%3D1445/https/monococojugueterias.com/cdn/shop/files/MC062.png?format=webp&quality=lossless&width=656&height=656" alt="Juguete" />
              <p>Juguete</p>
            </div>
          </div>
        </section>

        {/* Valoración */}
        <section className="rating-section">
          <h3>Valoración</h3>
          <div className="rating-grid">
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
