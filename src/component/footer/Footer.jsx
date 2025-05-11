import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Footer.css';
import Logo from '../../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-container">
          <img src={Logo} alt="PetCare logo" className="footer-logo" />
        </div>
        <div className="footer-info">
          <h3 className="footer-title">PetCare © 2025</h3>
          <p className="footer-text">
            Sistema de gestión para veterinarias y pet shops.<br />
            Brindamos soluciones modernas para el cuidado de tus mascotas.
          </p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="mailto:contacto@petcare.com">
            <FaEnvelope />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Términos</a>
          <a href="#">Privacidad</a>
          <a href="#">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
