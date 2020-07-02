import * as React from "react";
import { Link } from "react-router-dom"

const Navbar: React.FC<navbarProps> = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
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

   
        <ul className="navbar-nav mr-auto form-inline my-2 my-lg-0">
          <li className="nav-item active ">
            <Link to="/AddChirp">
              Add Chirp 
            </Link>
          </li>
        </ul>
      
    </nav>
  );
};
interface navbarProps {}
export default Navbar;
