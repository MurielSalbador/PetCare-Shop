import React, { useState, useEffect } from "react";
import { useProducts } from "../../../../PetCare-Shop-Api/src/hooks/useProducts.js";
import { Products } from "../productsList/productsList.jsx";
import { Link } from "react-router-dom";
import "./Home.modules.css";
import Carousel from "react-bootstrap/Carousel";
import { Container, Row, Col, Button, Card } from "react-bootstrap";  

export default function Home() {
  const [search, setSearch] = useState("");
  const { products, getProducts, loading } = useProducts({
    search,
    sort: false,
  });

  useEffect(() => {
    getProducts({ search });
  }, [search, getProducts]);

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="home-container">
      <header className="main-header">
        <div className="header-actions">
          {/* Navegación izquierda */}
          <ul className="nav-left">
            <li>
              <a href="/" className="link">
                <i className="fa-solid fa-house"></i> Home
              </a>
            </li>
            <li>
              <a href="#" className="link">
                <i className="fa-solid fa-info-circle"></i> Conocenos
              </a>
            </li>
            <li>
              <a href="/contact" className="link">
                <i className="fa-solid fa-envelope"></i> Contactanos
              </a>
            </li>
          </ul>

          {/* Navegación derecha */}
          <ul className="nav-right">
            <li>
              <a href="/cart" className="link">
                <i className="fa-solid fa-cart-shopping"></i> Mi carrito
              </a>
            </li>
            <li>
              <a href="" className="link" id="hire-me">
                <i className="fa-regular fa-user"></i> Mi cuenta
              </a>
            </li>
          </ul>
        </div>
      </header>
      <Container fluid className="banner-container py-4">
        <Row className="align-items-center">
          {/* Izquierda: Imagen + Texto + Botón */}
          <Col md={7} className="d-flex align-items-center">
            <Row>
              <Col md={6}>
                <img
                  src="https://png.pngtree.com/png-clipart/20230409/original/pngtree-dog-cute-animal-golden-retriever-png-image_9040407.png" // Reemplaza por la imagen de la silla o la que quieras
                  alt="Custom Pet"
                  className="img-fluid rounded"
                  style={{ maxHeight: "280px", objectFit: "cover" }}
                />
              </Col>
              <Col md={6} className="text-left px-3">
                <h1>¡Cuidá a tu mascota como se merece!</h1>
                <p className="fs-4 fw-bold text-success">Productos, alimentos y atención pensados para su bienestar</p>
                <Link to="/shop">
                  <Button variant="danger" size="lg" className="mt-3">
                    Visitá la tienda
                  </Button>
                </Link>
              </Col>
            </Row>
          </Col>

          {/* Derecha: Productos pequeños */}
          <Col md={5}>
            <Row className="g-3">
              {/* Tarjeta 1 - Alimentos */}
              <Col md={12}>
                <Card className="border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src="https://th.bing.com/th/id/OIP.1Z3mMHH3pE7X7hMLhmmmmAHaE6?rs=1&pid=ImgDetMain"
                    style={{ height: "120px", objectFit: "contain", padding: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>Alimentos Premium</Card.Title>
                    <Card.Text className="text-muted">
                      Nutrición equilibrada para perros y gatos
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              {/* Tarjeta 2 - Accesorios */}
              <Col md={12}>
                <Card className="border-0 shadow-sm">
                  <Card.Img
                    variant="top"
                    src="https://www.pngkit.com/png/full/305-3056430_dog-toy-png.png"
                    style={{ height: "120px", objectFit: "contain", padding: "10px" }}
                  />
                  <Card.Body>
                    <Card.Title>Accesorios con estilo</Card.Title>
                    <Card.Text className="text-muted">
                      Correas, collares, juguetes y más
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      {/* Barra inferior con beneficios */}
      <Container fluid className="bg-light py-3">
  <Row className="text-center justify-content-center align-items-center">
    <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2">
      <i className="fa-solid fa-truck-fast fa-2x text-danger"></i>
      <div>
        <strong>ENVÍO GRATIS</strong>
        <br />
        En Rosario y alrededores por compras desde $10.000
      </div>
    </Col>
    <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2 border-start border-end">
      <i className="fa-solid fa-paw fa-2x text-success"></i>
      <div>
        <strong>+100 PRODUCTOS</strong>
        <br />
        Para perros, gatos y más
      </div>
    </Col>
    <Col xs={4} md={3} className="d-flex align-items-center justify-content-center gap-2">
      <i className="fa-solid fa-shield-dog fa-2x text-warning"></i>
      <div>
        <strong>ASESORAMIENTO VETERINARIO</strong>
        <br />
        Consultá con nuestro equipo profesional
      </div>
    </Col>
  </Row>
</Container>

     <main className="main-content">
        <div className="main-wrapper">
          <section className="search-bar">
            <h2>¿Qué está buscando?</h2>
            <div className="input-group">
              <input
                type="text"
                placeholder="Buscando Producto..."
                value={search}
                onChange={handleInputChange}
              />
            </div>
          </section>

          <section className="product-list">
            {loading ? <p>Loading...</p> : <Products products={products} />}
          </section>
        </div>
      </main>
      <Carousel fade controls={false} indicators={false} interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1746809340135-8547998733-43943e1e987d4614f61aaaa933f8afac1746809342-1920-1920.png?148558823"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1728044319277-8878296151-521c6b8ebac3a32296d4c6b84223ade61728044317-1920-1920.png?148558823"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://acdn-us.mitiendanube.com/stores/002/428/163/themes/amazonas/1-slide-1727106214782-3375990206-7e890d772242eb0ff9c2f9cb44ea91511727106211-1920-1920.png?148558823"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

          <Container fluid className="bg-white py-4 mt-5 mb-5">
        <h5 className="text-center mb-4 fw-semibold text-muted">
          Tu mejor elección para cuidar a tu mascota
        </h5>
        <Row className="text-center justify-content-center align-items-start" style={{ marginTop: "5rem" }}>
          
          <Col xs={6} md={3} className="d-flex flex-column align-items-center mb-4">
            <i className="fa-solid fa-face-smile fa-3x text-warning mb-2"></i>
            <h6 className="fw-bold">Clientes felices</h6>
            <p className="text-muted small mb-0">Miles de personas confían en nuestros productos y atención.</p>
          </Col>

          <Col xs={6} md={3} className="d-flex flex-column align-items-center mb-4">
            <i className="fa-solid fa-box-open fa-3x text-primary mb-2"></i>
            <h6 className="fw-bold">Stock disponible</h6>
            <p className="text-muted small mb-0">Contamos con productos en stock para entrega inmediata.</p>
          </Col>

          <Col xs={6} md={3} className="d-flex flex-column align-items-center mb-4">
            <i className="fa-solid fa-hand-holding-heart fa-3x text-danger mb-2"></i>
            <h6 className="fw-bold">Atención personalizada</h6>
            <p className="text-muted small mb-0">Te asesoramos con calidez, como si fuera para tu propia mascota.</p>
          </Col>

          <Col xs={6} md={3} className="d-flex flex-column align-items-center mb-4">
            <i className="fa-solid fa-receipt fa-3x text-success mb-2"></i>
            <h6 className="fw-bold">Compras seguras</h6>
            <p className="text-muted small mb-0">Pagá de forma rápida y segura con múltiples métodos.</p>
          </Col>

        </Row>
      </Container>

      <section className="categories">
        <h3>Algunos de nuestros productos!</h3>
        <div className="category-items">
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/3-8355791aacba83caa917271887025177-480-0.webp"
              alt="Granola Pasas de Uva y Almendras x 300gr"
            />
            <span>Granola Pasas de Uva y Almendras x 300gr</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/4-014bf2d2580c9182f317424005608787-1024-1024.webp"
              alt="Barras de Cereal Pasas de Uva x 45 grs"
            />
            <span>Barras de Cereal Pasas de Uva x 45 grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/4-bdca41a5bbbb4d99e917271885875888-1024-1024.webp"
              alt="Granola Natural x 300grs"
            />
            <span>Granola Natural x 300grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/5-54b3c3f7cc10829ce817424004730174-1024-1024.webp"
              alt="Barras de Cereal Coco x 45 grs"
            />
            <span>Barras de Cereal Coco x 45 grs</span>
          </div>
          <div className="category-item">
            <img
              src="https://acdn-us.mitiendanube.com/stores/002/428/163/products/19-05487ea95382c80f0917271884686041-1024-1024.webp"
              alt="Granola VeganMAX x 300grs"
            />
            <span>Granola VeganMAX x 300grs</span>
          </div>
        </div>
      </section>

    </div>
  );
}
