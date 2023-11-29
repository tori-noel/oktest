import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Home
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          About Us
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Get in Touch
        </a>
      </li>
    </ul>
  );
}
