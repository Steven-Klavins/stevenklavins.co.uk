import React from "react";
import "../SideDrawer/BackDrop.css";

const BackDrop = (props) => (
  <div className="backDrop" onClick={props.click}></div>
);

export default BackDrop;
