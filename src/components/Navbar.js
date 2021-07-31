import "./Navbar.css";

import { Navbar, Container } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function NavbarEl() {
  return (
    <Navbar className="navbar navbar-expand-lg bg-primary">
      <Container>
        <Navbar.Brand href="#">
          <div className="d-flex align-items-start">
            <img
              src="https://retable.io/static/media/retableLogoWhite.78b22a6a.png"
              alt="Logo"
              className="topbar-logo"
            />
            <span className="ml-2 badge bg-secondary">BETA</span>
          </div>
        </Navbar.Brand>
        <div className="navbar-collapse collapse d-flex justify-content-end">
          <div className="navbar-nav">
            <a href="£" className="nav-link">
              <div>
                <span className="upgrade_box">UPGRADE</span>
              </div>
            </a>
          </div>
          <div className="navbar-nav">
            <div className="nav-link d-flex align-items-center">
              <div className="user-circule d-flex justify-content-center align-items-center">
                AA
              </div>
              <span className="ml-2 text-light ">Alaa Alaff</span>
            </div>
          </div>
          <div className="navbar-nav">
            <a href="£" className="nav-link">
              <img
                className="exit_icon"
                src="https://i.ibb.co/7kDJqXz/logout.png"
                alt="exit"
              />
            </a>
          </div>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavbarEl;
