import "./NavbarProjects.style.css";

function NavbarProjects() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg d-flex justify-content-between py-0"
        style={{ backgroundColor: "rgb(23, 210, 211)" }}
      >
        <div>
          <img
            src="https://i.ibb.co/Lp5dgqG/retable-logo-Recovered222.png"
            alt="logo"
            className="retable_logo"
          />
        </div>

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
          <a className="navbar-brand m-0 " href="$">
            Signup
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavbarProjects;
