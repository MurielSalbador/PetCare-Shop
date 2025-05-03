import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalSuccess({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Cuenta creada con éxito</Modal.Title>
      </Modal.Header>
      <Modal.Body>Ahora podés iniciar sesión con tu cuenta.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Ir a Login
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSuccess;