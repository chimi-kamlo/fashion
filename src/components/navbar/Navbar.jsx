import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">rivo</div>
      <div className="navigation_button">
        <div className="navigation">
          <nav>
            <ul>
              <li>
                <Link to="/" className="link">
                  home
                </Link>
              </li>
              <li>
                <Link to="#" className="link">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="#" className="link ">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="link margin_left">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="navbar_button">
          <button className="login">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
