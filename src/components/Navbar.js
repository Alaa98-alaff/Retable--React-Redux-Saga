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
      </Container>
    </Navbar>
  );
}

export default NavbarEl;
