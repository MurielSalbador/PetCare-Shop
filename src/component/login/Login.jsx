import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success('✅ Bienvenido!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
        navigate('/');
      } else {
          toast.error(data.message || '❌ Contraseña o Email incorrecto', {
            position: 'top-right',
            autoClose: 3000,
            theme: 'colored',
          });
        }
        
    } catch (err) {
      toast.error('⚠️ Error en el servidor', {
        position: 'top-right',
        autoClose: 3000,
        theme: 'colored',
      });
    }
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="login-form">
        <h3 className="text-center mb-4">Iniciar sesión</h3>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Tu correo"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Tu contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={6}
            />
          </Form.Group>

          <div className="button-group">
            <Button type="submit" className="custom-button-register">
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
          Si olvidaste tu contraseña, hacé click en{' '}
          <a href="/recuperar" className="custom-button-faq">
            Recuperarla
          </a>{' '}
          y seguí las instrucciones para recuperarla.
        </p>

        <p className="text-center">
          Para más preguntas, hacé click en{' '}
          <a href="/faq" className="custom-button-faq">
            Preguntas Frecuentes
          </a>
        </p>
      </div>
    </>
  );
}

export default Login;
