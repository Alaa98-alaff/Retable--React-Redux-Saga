import "./DisapleWorkShops.css";

import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function DisapleWorkShops() {
  return (
    <Container>
      <section className="mt-30">
        <div className=" py-5 px-5 shadow border-0">
          <div className="row d-flex">
            <div className="col-sm-3 mb-5">
              <div className="card-bg d-flex align-items-center justify-content-center card mb-1">
                <img
                  className="card_icon"
                  src="https://i.ibb.co/SyDSpv4/cookies-edited.png"
                  alt="cookies"
                />
              </div>
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
