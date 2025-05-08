import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css';
import ModalSuccess from '../modalSuccess/ModalSuccess';

function Register() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formIsValid = event.currentTarget.checkValidity();
    const passwordsMatch = formData.password === formData.confirmPassword;

    setValidated(true);

    // Verificación de validación del formulario y si las contraseñas coinciden
    if (!formIsValid || !passwordsMatch) return;

    try {
      const res = await fetch('http://localhost:3000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setShowModal(true);
        setTimeout(() => {
          setShowModal(false);
          navigate('/login'); 
        }, 1500); 
      } else {
        setError(data.message || 'Error al registrarse');
      }
    } catch (err) {
      setError(data.message || 'Error en el servidor');
    }
  };

  return (
    <div className="login-form">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h3 className="text-center mb-4">Registrarse</h3>

        <Form.Group className="mb-3" controlId="formUsername">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tu nombre"
            name="username"
            value={formData.username}
            onChange={handleChange}
            isInvalid={validated && !formData.username} // Mostrar error si el campo está vacío
          />
          <Form.Control.Feedback type="invalid">Ingresá tu nombre.</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Tu apellido"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            isInvalid={validated && !formData.lastName} // Mostrar error si el campo está vacío
          />
          <Form.Control.Feedback type="invalid">Ingresá tu apellido.</Form.Control.Feedback>
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
            isInvalid={validated && !formData.email} // Mostrar error si el campo está vacío
          />
          <Form.Control.Feedback type="invalid">Ingresá un correo válido.</Form.Control.Feedback>
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
            isInvalid={validated && (formData.password.length < 6)} // Verifica longitud mínima
          />
          <Form.Control.Feedback type="invalid">
            La contraseña debe tener al menos 6 caracteres.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formConfirmPassword">
          <Form.Label>Confirmar contraseña</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Repetí tu contraseña"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            minLength={6}
            isInvalid={validated && formData.confirmPassword !== formData.password} // Verifica que coincidan las contraseñas
          />
          <Form.Control.Feedback type="invalid">
            Las contraseñas no coinciden.
          </Form.Control.Feedback>
        </Form.Group>

        {error && (
          <p className="text-danger text-center">{error}</p>
        )}

        <div className="button-group">
          <Button type="submit" className="custom-button-ingresar">
            Crear Usuario
          </Button>
        </div>
      </Form>

      <ModalSuccess
        show={showModal}
        handleClose={() => {
          setShowModal(false);
          navigate('/login'); // Redirige al login después del registro
        }}
      />
    </div>
  );
}

export default Register;
