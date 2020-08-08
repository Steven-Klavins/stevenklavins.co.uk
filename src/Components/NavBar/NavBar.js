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
              <a href="/"> Photography</a>
            </li>
            <li>
              <a href="/"> 3D modelling/printing</a>
            </li>
            <li>
              <a href="/"> Art</a>
            </li>
            <li>
              <a href="/"> About</a>
            </li>
            <li>
              <a href="/"> Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
