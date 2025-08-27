import { Link } from "react-router-dom";

import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="logo">📰 My Blog</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home hewllo</Link>
        </li>
        <li>
          <Link to="/add">New Post</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
