import { useDispatch } from "react-redux";
import "./AddWorkSpaces.style.css";
import { Container } from "react-bootstrap";

function AddWorkSpaces() {
  const dispatch = useDispatch();

  const addWorkspace = () => {
    dispatch({ type: "open modal" });
    dispatch({ type: "naming modal", value: "Add new workspace" });
  };

  return (
    <Container>
      <section>
        <div className="pt-4 d-flex row">
          <div className="col-sm-6">
            <h3 className="title fw-bold">Workspaces</h3>
          </div>
          <div className="col-sm-6 d-flex justify-content-end">
            <button
              type="button"
              className="btn-add btn btn-primary"
              onClick={addWorkspace}
            >
              Add new workspace
            </button>
          </div>
        </div>
      </section>
      <section className="d-flex row pt-2">
        <form className="form-group has-search col-sm-3">
          <span className="fa fa-search form-control-feedback"></span>
          <input type="text" className="form-control" placeholder="Search" />
        </form>
        <div className="d-flex justify-content-end align-items-center col-sm-9 pr-18">
          <span className="d-flex align-items-center">
            <img
              className="collection"
              src="https://i.ibb.co/7nQM5f7/microsoft-edited.png"
              alt="collection"
            />
          </span>
          <span>
            <div className="hamburger-menu">
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
              <div className="hamburger__line"></div>
            </div>
          </span>
        </div>
      </section>
      <hr />
    </Container>
  );
}

export default AddWorkSpaces;
