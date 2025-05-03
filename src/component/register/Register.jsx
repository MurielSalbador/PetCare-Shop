import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import Modal from 'react-bootstrap/Modal'; 
import ModalSuccess from '../modalSuccess/ModalSuccess';



function Register() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    dni: '',
  });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
  
    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
  
    setValidated(true);
    setShowModal(true);
  
    setTimeout(() => {
      setShowModal(false);
      navigate('/login');
    }, 3000);
  };

  return (
    <>
      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Registrarse</h3>

          <Form.Group className="mb-3" controlId="formNombre">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Tu nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingresá tu nombre.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Nombre Admitido</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formApellido">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Tu apellido"
              name="apellido"
              value={formData.apellido}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingresá tu apellido.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Apellido Admitido</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Tu correo"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Ingresá un correo válido.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Email válido</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Tu contraseña"
              name="password"
              value={formData.password}
              onChange={handleChange}
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe tener al menos 6 caracteres.
            </Form.Control.Feedback>
            <Form.Control.Feedback>Contraseña segura </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDNI">
            <Form.Label>DNI</Form.Label>
            <Form.Control
              required
              type="text"
              pattern="\d+"
              placeholder="Tu DNI"
              name="dni"
              value={formData.dni}
              onChange={handleChange}
              maxLength={8}
              minLength={8}
            />
            <Form.Control.Feedback type="invalid">
              Ingresá un DNI válido (solo números).
            </Form.Control.Feedback>
            <Form.Control.Feedback>DNI válido</Form.Control.Feedback>
          </Form.Group>

          <div className="button-group">
            <Button  type="submit" className="custom-button-ingresar">
              Crear Usuario
            </Button>
          </div>
        </Form>

        <ModalSuccess
            show={showModal}
            handleClose={() => {
            setShowModal(false);
            navigate('/login');
         }}
/>


      </div>
    </>
  );
}

export default Register;