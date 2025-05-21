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
      .sendForm(
        "service_h9u217y",
        "template_lwc97il",
        form.current,
        "UkWj1Chi6zu-WlxCw"
      )
      .then(
        (result) => {
          console.log("Mensaje enviado ✅", result.text);
          form.current.reset();
          setShowModal(true);
        },
        (error) => {
          console.log("Error ❌", error.text);
          alert("Ocurrió un error al enviar el mensaje. Intenta nuevamente.");
        }
      );
  };

  const handleClose = () => {
    setShowModal(false);
    navigate('/');
  };

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        handleClose();
      }, 2000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [showModal]);

  return (
    <div className="container-contact">
      <div className="contact-close">
        <CloseButton aria-label="Cerrar formulario" onClick={handleClose} />
      </div>

      <Form noValidate validated={validated} ref={form} onSubmit={sendEmail} className="contact-form">
        <h2 className="title">Contáctanos</h2>

        <Form.Group className="mb-3" controlId="formName">
          <Form.Control
            required
            type="text"
            name="name"
            placeholder="Tu nombre"
            className="contact-input"
          />
          <Form.Control.Feedback type="invalid">
            Ingresá tu nombre.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Control
            required
            type="email"
            name="email"
            placeholder="Tu correo"
            className="contact-input"
          />
          <Form.Control.Feedback type="invalid">
            Ingresá un correo válido.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formSubject">
        <Form.Control
            required
            type="text"
            name="subject"
            placeholder="Asunto"
            className="contact-input"
          />
          <Form.Control.Feedback type="invalid">
            Ingresá un asunto.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Control
            required
            as="textarea"
            name="message"
            placeholder="Tu mensaje"
            rows={5}
            className="contact-textarea"
          />
          <Form.Control.Feedback type="invalid">
            Ingresá un mensaje.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" className="contact-button">
          Enviar
        </Button>
      </Form>

      <ModalSuccessMsg
        show={showModal}
        handleClose={handleClose}
      />
    </div>
  );
};

export default ContactForm;
