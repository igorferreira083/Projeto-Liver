import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="nav-logo">
        Liver
      </div>

      <div className="nav-links">

        <Link to="/login" className="nav-button">
          Login
        </Link>

        <Link
          to="/register"
          className="nav-button register-button"
        >
          Registrar
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;