import React from "react";
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
          <a href="/"> Home</a>
        </li>
        <li>
          <a href="/">
            {" "}
            Software/Web <br></br> Development
          </a>
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
};

export default SlideDrawer;
