import React, { useState } from 'react';
import './FaqQuestions.css';
import { FaWhatsapp } from 'react-icons/fa';

const FaqQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const faqSections = [
         {
    title: "¿Cómo puedo realizar un pedido?",
    desc: "Realizar un pedido es fácil. Solo tenés que navegar por nuestra tienda online, agregar los productos que te interesan al carrito y proceder al checkout. Podés elegir entre diferentes métodos de pago como tarjeta de crédito, débito, o transferencia bancaria. Si tenés algún inconveniente durante el proceso, no dudes en contactarnos.",
    contact: "Para más información, contacta al: +54 9 11 1234-5678",
    },
    {
      title: "¿Tu paquete está a salvo?",
      desc: "Sí. Cada pedido se embala con cuidado y seguimiento para que llegue perfecto. Usamos materiales resistentes, cinta de seguridad y envoltorios acolchonados para proteger tanto productos frágiles como delicados. Además, todos nuestros envíos cuentan con número de seguimiento y soporte activo por si algo llegara a fallar.",
      contact: "Para más información, contacta al: +54 9 11 1234-5678",
    },
    {
      title: "¿Dónde está mi pedido?",
      desc: "Desde el momento que despachamos tu compra, podés seguir el recorrido en tiempo real desde tu cuenta. En la sección de 'Mis pedidos', verás el estado actualizado: preparado, despachado, en camino o entregado. Si algo se demora, te avisamos. Si no podés rastrearlo, escribinos y te ayudamos.",
      contact: "Para más información, contacta al: +54 9 11 8765-4321",
    },
    {
      title: "Envíos y entregas",
      desc: "Hacemos envíos a todo el país en 24 a 72 hs hábiles dependiendo de la zona. Podés elegir entre envío a domicilio, retiro por sucursal o entregas express. Todos los paquetes van asegurados y te notificamos por email y WhatsApp cuando están en camino. Trabajamos con operadores confiables como Correo Argentino, Andreani, y otros.",
      contact: "Para más información, contacta al: +54 9 11 2345-6789",
    },
      {
    title: "¿Qué debo hacer si recibí un producto defectuoso?",
    desc: "Lamentamos mucho si recibiste un producto defectuoso. Por favor, comunicate con nosotros dentro de los 7 días de recibido el pedido y envíanos fotos del producto y su defecto. Nos encargaremos de reemplazar el producto o reintegrarte el dinero, dependiendo de lo que prefieras.",
    contact: "Para más información, contacta al: +54 9 11 3456-7890",
    },
       {
      title: "Devoluciones y Reembolsos",
      desc: "¿No era lo que esperabas? Podés devolver el producto dentro de los 7 días desde que lo recibiste. Solo tiene que estar sin uso, con el empaque original. Nosotros te enviamos una etiqueta para devolverlo sin costo y al recibirlo, te reintegramos el dinero o cambiamos el producto. Es simple, rápido y sin vueltas.",
      contact: "Para más información, contacta al: +54 9 11 3456-7890",
    },
    {
      title: "¿Tienen atención al cliente los fines de semana?",
      desc: "Sí, tenemos atención al cliente los sábados de 10 a 18 hs. Los domingos y feriados podés dejarnos tu mensaje y te responderemos el siguiente día hábil. También podés escribirnos por WhatsApp o email en cualquier momento.",
      contact: "Para más información, contacta al: +54 9 11 4444-5555",
    },
    {
      title: "¿No encontraste tu pregunta?",
      desc: "No te preocupes, ¡estamos para ayudarte! Si tenés una duda específica o querés hablar directamente con nuestro equipo, podés escribirnos por WhatsApp. Estamos disponibles y respondemos rápido. Solo tocá el ícono flotante abajo a la derecha y empezá a chatear con nosotros.",
    }
  ];

  return (
    <div className="help-wrapper">
      <aside className="help-sidebar">
        {faqSections.map((item, index) => (
          <button
            key={index}
            className={`sidebar-btn ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            {item.title}
          </button>
        ))}
      </aside>
      <section className="help-content-single">
        <div className="back-arrow-container">
          <a href="/" className="back-arrow">← Volver al inicio</a>
        </div>
        <h2>{faqSections[activeIndex].title}</h2>
        <p>{faqSections[activeIndex].desc}</p>
        <p className="contact-info">{faqSections[activeIndex].contact}</p>
      </section>
      
      <a href="https://wa.me/5491112345678" target="_blank" className="whatsapp-btn" aria-label="Contactar por WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default FaqQuestions;
