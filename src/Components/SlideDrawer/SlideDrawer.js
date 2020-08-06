import React from "react";
import { Link } from "react-router-dom";
import "../SlideDrawer/SlideDrawer.css";

const SlideDrawer = (props) => {
  let drawerClasses = "slideDrawer";

  if (props.show) {
    drawerClasses = "slideDrawer open";
  }

  return (
    <nav className={drawerClasses}>
      <ul className=" slideList">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/development">
            {" "}
            Software/Web <br></br> Development
          </Link>
        </li>
        <li>
          <a href="/"> Music</a>
        </li>
        <li>
          <a href="/"> Photography</a>
        </li>
        <li>
          <a href="/">
            {" "}
            3D modelling/<br></br> printing
          </a>
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
    </nav>
  );
};

export default SlideDrawer;
