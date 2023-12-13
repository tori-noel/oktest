import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/aboutus">About Us</Link>
      </li>
      <li className="nav-item">
        {" "}
        <Link to="/getintouch"> Get in Touch</Link>
      </li>
    </ul>
  );
}
