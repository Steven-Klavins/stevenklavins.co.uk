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
          <Link to="/music">Music</Link>
        </li>
        <li>
          <Link to="/photography">Photography</Link>
        </li>
        <li>
          {" "}
          <Link to="/3D">
            3D Printing/<br></br> Electronics
          </Link>
        </li>
        <li>
          <Link to="/art">
            Art/<br></br> 3D Modeling
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default SlideDrawer;
