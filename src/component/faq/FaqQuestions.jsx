import React, { act } from 'react';
import './FaqQuestions.css';
import { useNavigate } from 'react-router-dom';

const FaqQuestions = () => {
  const navigate = useNavigate();

  const quickActions = [
    { title: "Rastrear tu paquete", desc: "Realiza un seguimiento de tus paquetes en Mis pedidos." },
    { title: "Devolver productos que pediste", desc: "Devuelve tus pedidos utilizando nuestro Centro de devoluciones en línea." },
    { title: "Verifica el estado de tu reembolso", desc: "Haz seguimiento a tus devoluciones y reembolsos en Mis pedidos." },
    { title: "Rastrea tu devolución", desc: "Puedes mantenerte al tanto de tus devoluciones rastreándolas en Mis pedidos." },
    { title: "Cancela tu membresía de Amazon Prime", desc: "Cancela tu membresía fácilmente a través de esta página." },
    { title: "Actualización del método de pago", desc: "Mantén actualizados los métodos de pago para evitar interrupciones en las compras." },
    { title: "Obtén soporte para productos", desc: "Brindamos soporte gratis para productos cuando necesitas ayuda para utilizar un producto o si no funciona correctamente." }
  ];

  const menuItems = [
    "Toma acciones rápidas",
    "¿Dónde está mi pedido?",
    "Envíos y entregas",
    "Devoluciones y Reembolsos",
    "Administrar Tu Cuenta",
    "Seguridad y Privacidad",
    "Pago, Precios y Promociones",
    "Dispositivos y Soluciones Digitales",
    "Cuentas de Amazon Business",
    "Servicios para productos grandes y pesados",
    "Otros temas y sitios de ayuda"
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
          <div key={index} className="help-card" onClick={() => navigate('/FaqQuestions')}>
            <h4>{action.title}</h4>
            <p>{action.desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default FaqQuestions;
