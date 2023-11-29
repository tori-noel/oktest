import React from "react";
import "./Navbar.css";
export default function Navbar() {
  return (
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">
          Active
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Link
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          Disabled
        </a>
      </li>
    </ul>
  );
}
