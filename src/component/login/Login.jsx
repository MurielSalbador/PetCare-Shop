import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useNavigate} from 'react-router-dom'
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="login-form">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <h3 className="text-center mb-4">Iniciar sesión</h3>

          <Form.Group className="mb-3" controlId="formBasicSelect">
            <Form.Label>Seleccione una opción</Form.Label>
            <Form.Select className="select-button">
              <option value="1">Usuario</option>
              <option value="2">Gestión</option>
              <option value="3">Administrador</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              Ingresá un correo válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              minLength={6}
            />
            <Form.Control.Feedback type="invalid">
              La contraseña debe tener al menos 6 caracteres.
            </Form.Control.Feedback>
          </Form.Group>

          <div className="button-group">
          <Button type="submit"className="custom-button-register">
           Iniciar Sesión
          </Button>

            

          </div>
        </Form>

        <Button onClick={handleRegisterClick} className="custom-button-register">
              Registrarse
            </Button>
            
      </div>

      <div className="faq-recomendation">
        <p className="text-center">
          Si olvidaste tu contraseña, hacé click en{" "}
          <a href="/recuperar" className="custom-button-faq">
            Recuperarla
          </a>{" "}
          y seguí las instrucciones para recuperarla.
        </p>

        <p className="text-center">
          Para más preguntas, hacé click en{" "}
          <a href="/faq" className="custom-button-faq">
            Preguntas Frecuentes
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;