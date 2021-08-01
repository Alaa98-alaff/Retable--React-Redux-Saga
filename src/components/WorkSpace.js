import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./WorkSpace.css";

function WorkSpace() {
  return (
    <Container>
      <section className="raw mt-45 d-flex">
        <div className="col-sm-6 ">
          <div className="mb-2 mb-3 d-flex align-items-center">
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
      </section>
    </Container>
  );
}

export default WorkSpace;
