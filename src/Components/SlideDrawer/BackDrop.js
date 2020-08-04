import React from "react";
import "../SlideDrawer/BackDrop.css";

const BackDrop = (props) => (
  <div className="backDrop backDropHide" onClick={props.click}></div>
);

export default BackDrop;
