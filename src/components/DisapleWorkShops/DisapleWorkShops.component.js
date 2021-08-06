import { Link } from "react-router-dom";
import "./DisapleWorkShops.style.css";
import { Container } from "react-bootstrap";

function DisapleWorkShops() {
  return (
    <Container>
      <section className="mt-30">
        <div className=" py-5 px-5 shadow border-0">
          <div className="row d-flex">
            <div className="project_card col-sm-3 mb-4">
              <Link to="/project-table">
                <div className="card-bg d-flex align-items-center justify-content-center card mb-1 cursor">
                  <img
                    className="card_icon"
                    src="https://i.ibb.co/SyDSpv4/cookies-edited.png"
                    alt="cookies"
                  />
                </div>
              </Link>
              <div className="d-flex align-items-center justify-content-between">
                <span className="">Dietitian Project</span>
                <img
                  className="arrow_icon"
                  src="https://image.flaticon.com/icons/png/512/32/32195.png"
                  alt="arrow icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default DisapleWorkShops;
