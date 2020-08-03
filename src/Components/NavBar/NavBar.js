import React from "react";
import "../NavBar/NavBar.css";
import logo from "../../images/main-logo.png";
import ToggleButton from "../SideDrawer/ToggleButton";

const NavBar = (props) => {
  return (
    <header className="navBar">
      <nav className="navigation">
        <div>
          <ToggleButton click={props.drawClickHandler} />
        </div>
        <div className="logo">
          <a href="/">
            <img className="logo" src={logo}></img>
          </a>
        </div>

        <div>
          <ul className="navItems">
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
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
