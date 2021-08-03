import { useDispatch } from "react-redux";
import { Container } from "react-bootstrap";
import "./WorkSpace.style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function WorkSpace() {
  const dispatch = useDispatch();

  const addProject = () => {
    dispatch({ type: "open modal" });
    dispatch({ type: "naming modal", value: "Add new project" });
  };

  const shareHandler = () => {
    dispatch({ type: "open modal" });
    dispatch({ type: "naming modal", value: "Share" });
  };

  return (
    <Container>
      <section className="raw mt-45 d-flex justify-content-between">
        <div className="col-sm-6 ">
          <div className="mb-2 d-flex align-items-center">
            <span className="h3 pr-18">Dietician's Workspace</span>
            <a href="£" type="button">
              <img
                className="arrow"
                src="https://image.flaticon.com/icons/png/512/32/32195.png"
                alt="arrow"
              />
            </a>
          </div>
          <div>
            <span className="h5 font-weight-normal">
              A Workspace that store all the dietician informations in UK
            </span>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-end ">
            <button
              type="button"
              className="btn-add btn btn-primary mb-10"
              onClick={addProject}
            >
              Add new project
            </button>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <button
              type="button"
              className="share-btn btn b btn-sm btn-primary d-flex align-items-center"
              onClick={shareHandler}
            >
              Share
              <img
                className="user-icon ml-2"
                src="https://i.ibb.co/mTy0zHk/user-edited.png"
                alt="user icon"
              />
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default WorkSpace;
