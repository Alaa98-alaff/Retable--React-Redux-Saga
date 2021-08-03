import { Modal, Button } from "react-bootstrap";

function ModalComponent() {
  return (
    <Modal show={true} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>Modal title</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer className="p-1">
        <Button>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
