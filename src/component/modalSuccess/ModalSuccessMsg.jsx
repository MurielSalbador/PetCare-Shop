import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaCheckCircle } from 'react-icons/fa';
import "./ModalSuccessMsg.css";

function ModalSuccessMsg({ show, handleClose }) {
  return (
    <Modal 
    show={show} 
    onHide={handleClose}
    dialogClassName="custom-modal"
    contentClassName="custom-modal-content"
    centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
        <FaCheckCircle style={{ color: '#0ad826', marginRight: '8px' }} />
          Mensaje enviado con éxito
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>Lo recibimos correctamente. Nos pondremos en contacto con vos lo antes posible.</Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={handleClose}>
          Ir al inicio
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalSuccessMsg;