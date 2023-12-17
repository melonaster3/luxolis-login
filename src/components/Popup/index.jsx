import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const PopUp = ({ handleOpen, handleClose }) => {
  //Boostrap Popup Modal for Wrong Password
  return (
    <>
      <Modal show={handleOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>The provided password is wrong.</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
