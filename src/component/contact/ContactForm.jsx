import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";
import CloseButton from 'react-bootstrap/CloseButton';
import ModalSuccessMsg from '../modalSuccess/ModalSuccessMsg.jsx';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();
    const formIsValid = e.currentTarget.checkValidity();
    setValidated(true);
    if (!formIsValid) return;

    emailjs
      .sendForm("service_h9u217y", "template_lwc97il", form.current, "UkWj1Chi6zu-WlxCw")
      .then(
        (result) => {
          form.current.reset();
          setShowModal(true);
        },
        (error) => {
          alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  const handleClose = () => {
    setShowModal(false);
    navigate("/");
  };

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(handleClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  return (
    <div className="contact-bg">
      <div className="contact-container">
        <button className="back-arrow-form" onClick={handleClose}>
          ←
        </button>

        <div
          className="contact-left"
          style={{ backgroundImage: "url('https://i.postimg.cc/0jv27Qvw/20008380-645221846.jpg')" }}
        />

        <div className="contact-right">
          <Form noValidate validated={validated} ref={form} onSubmit={sendEmail} className="contact-form">
            <h3 className="form-title">Contáctanos</h3>

            <Form.Control
              required type="text" name="name" placeholder="Tu nombre"
              className="form-control mb-3"
            />
            <Form.Control.Feedback type="invalid">Ingresá tu nombre.</Form.Control.Feedback>

            <Form.Control
              required type="email" name="email" placeholder="Tu correo"
              className="form-control mb-3"
            />
            <Form.Control.Feedback type="invalid">Ingresá un correo válido.</Form.Control.Feedback>

            <Form.Control
              required type="text" name="subject" placeholder="Asunto"
              className="form-control mb-3"
            />
            <Form.Control.Feedback type="invalid">Ingresá un asunto.</Form.Control.Feedback>

            <Form.Control
              required as="textarea" name="message" rows={5} placeholder="Tu mensaje"
              className="form-control mb-3"
            />
            <Form.Control.Feedback type="invalid">Ingresá un mensaje.</Form.Control.Feedback>

            <Button type="submit" className="btn-submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>

      <ModalSuccessMsg show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default ContactForm;
