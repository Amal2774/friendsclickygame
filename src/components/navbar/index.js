import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="navbar-brand" to="/">
        Friends. I'll Be There for You.
      </div>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item navList">
          </li>
          <li className="nav-item navList">
          </li>
          <li className="nav-item navList">
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
