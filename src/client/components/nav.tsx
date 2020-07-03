import * as React from "react";
import { Link } from "react-router-dom"

const Navbar: React.FC<navbarProps> = () => {
  const mystyle= {
    marginLeft: 100
  }
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

   
        <ul className="navbar-nav"style={mystyle}>
          <li className="nav-item active margin-left-50">
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
