import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkSpace.css";

function WorkSpace() {
  return (
    <Container>
      <section className="raw mt-45 d-flex">
        <div className="col-sm-6 ">
          <div className="mb-2 d-flex align-items-center">
            <span className="h3 pr-18">Workspace 1</span>
            <a href="£" type="button">
              <img
                className="arrow"
                src="https://image.flaticon.com/icons/png/512/32/32195.png"
                alt="arrow"
              />
            </a>
          </div>
          <div>
            <span className="h5 font-weight-normal">Defualt Workspace</span>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="d-flex justify-content-end ">
            <button type="button" className="btn-add btn btn-primary mb-10">
              Add new project
            </button>
          </div>

          <div className="d-flex justify-content-end align-items-center">
            <button
              type="button"
              className="share-btn btn b btn-sm btn-primary d-flex align-items-center"
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
