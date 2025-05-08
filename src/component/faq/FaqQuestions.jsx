import React, { act } from 'react';
import './FaqQuestions.css';
import { useNavigate } from 'react-router-dom';

const FaqQuestions = () => {
  const navigate = useNavigate();

  const quickActions = [
    { title: "¿Tu paquete está a salvo?", desc: "Sí. Cada pedido se embala con cuidado y seguimiento para que llegue perfecto." },
    { title: "¿Cómo puedo saber de qué proveedor viene un producto?", desc: "Trabajamos con proveedores verificados y te lo indicamos en la descripción del producto o en el detalle del pedido si aplica." },
    { title: "¿Los productos son originales?", desc: "Sí, todos los productos que vendemos son 100% originales y vienen directamente de distribuidores oficiales o marcas reconocidas." },
    { title: "Envíos que no fallan", desc: "Usamos operadores logísticos confiables y siempre te damos seguimiento. Si algo sale mal, lo resolvemos sin vueltas." },
    { title: "Amor por lo natural", desc: "Apostamos por productos con ingredientes reales, materiales no tóxicos y opciones eco-friendly para cuidar a tu mascota y al planeta." },
    { title: "Gente que ama lo que hace", desc: "Somos un equipo de personas que conviven con animales todos los días. Eso se nota en cómo armamos cada pedido y en cómo te atendemos." },
    
  ];

  const menuItems = [
    "Preguntas frecuentes",
    "¿Dónde está mi pedido?",
    "Envíos y entregas",
    "Devoluciones y Reembolsos",
    "Administrar Tu Cuenta",
    "Seguridad y Privacidad",
    "Pago, Precios y Promociones",
  ];

  return (
    <div className="help-wrapper">
      <aside className="help-sidebar">
        {menuItems.map((item, index) => (
          <button key={index} className={`sidebar-btn ${index === 0 ? 'active' : ''}`}>
            {item}
          </button>
        ))}
      </aside>
      <section className="help-content">
        {quickActions.map((action, index) => (
          <div key={index} className="help-card">
            <h4>{action.title}</h4>
            <p>{action.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqQuestions;
