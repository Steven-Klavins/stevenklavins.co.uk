import React from "react";
import "../SideDrawer/ToggleButton.css";

const ToggleButton = (props) => (
  <button className="toggleButton" onClick={props.click}>
    <span className="toggleLine"></span>
    <span className="toggleLine"></span>
    <span className="toggleLine"></span>
  </button>
);

export default ToggleButton;
