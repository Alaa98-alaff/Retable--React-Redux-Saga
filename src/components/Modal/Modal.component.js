import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";

function ModalComponent() {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.openModal);
  const modaltitle = useSelector((state) => state.modalTitle);

  const closeModal = () => {
    dispatch({ type: "close modal" });
  };

  return (
    <Modal show={show} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header className="justify-content-center">
        <Modal.Title id="contained-modal-title-vcenter">
          <h1>{modaltitle}</h1>
        </Modal.Title>
      </Modal.Header>
      <Modal.Footer className="p-1">
        <Button onClick={closeModal}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
