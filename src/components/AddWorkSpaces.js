import "./AddWorkSpaces.css";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function AddWorkSpaces() {
  return (
    <Container>
      <section>
        <div className="pt-2 d-flex row">
          <div className="col-sm-6">
            <h3>Workspaces</h3>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <button type="button" className="btn-add btn btn-primary">
              Add New Workspace
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default AddWorkSpaces;
