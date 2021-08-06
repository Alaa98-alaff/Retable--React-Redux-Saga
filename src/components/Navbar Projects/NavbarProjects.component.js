import { Link } from "react-router-dom";

import "./NavbarProjects.style.css";

function NavbarProjects() {
  return (
    <div className="nav-proj position-fixed w-100">
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-between py-0"
        style={{ backgroundColor: "rgb(23, 210, 211)" }}
      >
        <Link to="/">
          <img
            src="https://i.ibb.co/Lp5dgqG/retable-logo-Recovered222.png"
            alt="logo"
            className="retable_logo"
          />
        </Link>

        <div className="title_box d-flex align-items-center justify-content-between">
          <img
            src="https://i.ibb.co/SyDSpv4/cookies-edited.png"
            alt="table logo"
            className="table_logo"
          />
          <span className="h1 navbar-brand m-0 fw-bold" href="$">
            Table 1
          </span>
        </div>

        <div className="text-center">
          <Link className="navbar-brand m-0 " to="/">
            Signup
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavbarProjects;
