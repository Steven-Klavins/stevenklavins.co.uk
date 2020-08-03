import React from "react";
import "../SideDrawer/SideDrawer.css";

const SideDrawer = (props) => (
  <nav className="sideDrawer">
    <ul className=" sideList">
      <li>
        <a href="/"> Home</a>
      </li>
      <li>
        <a href="/"> Software/Web Development</a>
      </li>
      <li>
        <a href="/"> Music</a>
      </li>
      <li>
        <a href="/"> Photography</a>
      </li>
      <li>
        <a href="/"> 3D modelling/printing</a>
      </li>
      <li>
        <a href="/"> Art</a>
      </li>
      <li>
        <a href="/"> Youtube</a>
      </li>
      <li>
        <a href="/"> About</a>
      </li>
    </ul>
  </nav>
);

export default SideDrawer;
