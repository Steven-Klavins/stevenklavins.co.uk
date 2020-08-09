import React from "react";
import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";
import logo from "../../images/main-logo.png";
import ToggleButton from "../SlideDrawer/ToggleButton";

const NavBar = (props) => {
  return (
    <header className="navBar">
      <nav className="navigation">
        <div className="toolBarButton">
          <ToggleButton click={props.drawClickHandler} />
        </div>
        <div className="logo">
          <a href="/">
            <img className="logo" src={logo} alt="logo"></img>
          </a>
        </div>
        <div className="titleSK">
          <h1 className="toolBarButton">Steven Klavins</h1>
        </div>

        <div className="navSpacer">
          <ul className="navItems">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/development">Software/Web Development</Link>
            </li>
            <li>
              <Link to="/music">Music</Link>
            </li>
            <li>
              <Link to="/photography">Photography</Link>
            </li>
            <li>
              <Link to="/3D">3D modelling/printing</Link>
            </li>
            <li>
              <Link to="/art">Art</Link>
            </li>
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
