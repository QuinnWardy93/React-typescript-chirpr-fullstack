import * as React from "react";
import { Link } from "react-router-dom"

const Navbar: React.FC<navbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to= "/">
        Chirpr
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/AddChirp">
              Add Chirp 
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
interface navbarProps {}
export default Navbar;
