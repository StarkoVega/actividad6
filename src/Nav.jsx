import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <Link to="/" className="navbar-brand">
          Jose Vega
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#toggleMobileMenu"
          aria-controls="toggleMobileMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="toggleMobileMenu">
          <ul className="navbar-nav ms-auto text-center">
            <li>
              <Link to="/" className="nav-link">
                Inicio
              </Link>
            </li>
            <li>
              <Link to="/Ejercicio1" className="nav-link">
                Ejercicio 1
              </Link>
            </li>
            <li>
              <Link to="/Ejercicio2" className="nav-link">
                Ejercicio 2
              </Link>
            </li>
            <li>
              <Link to="/Ejercicio3" className="nav-link">
                Ejercicio 3
              </Link>
            </li>
            <li>
              <Link to="/Ejercicio4" className="nav-link">
                Ejercicio 4
              </Link>
            </li>
            <li>
              <Link to="/Ejercicio5" className="nav-link">
                Ejercicio 5
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
