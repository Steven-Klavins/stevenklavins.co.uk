import React, { Component, lazy, Suspense } from "react";
import "../ProjectBox/ProjectBox.css";
import ReactPlayer from "react-player";

export default class ProjectBox extends Component {
  render() {
    return (
      <div>
        <div className="projectBoxContainer">
          <ReactPlayer
            className="projectVideo"
            url={this.props.params[0]}
            style={{ "max-width": "86%" }}
          />
          <p className="projectDescription">
            <h2 className="projectTitle">{this.props.params[2]}</h2>
            {this.props.params[1]}
          </p>{" "}
        </div>
        <div className="LRcontrols">
          <button onClick={this.props.moveBack} className="arrowL ">
            ◄
          </button>
          <button onClick={this.props.moveFoward} className="arrowR ">
            ►
          </button>
        </div>
      </div>
    );
  }
}
