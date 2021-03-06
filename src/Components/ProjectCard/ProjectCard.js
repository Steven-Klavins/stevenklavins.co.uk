import React from "react";
import "../../Components/ProjectCard/ProjectCard.css";
import gitHubIcon from "../../images/github-logo.png";

export class Repo extends React.Component {
  addDefaultSrc(ev) {
    ev.target.src =
      "https://raw.githubusercontent.com/Steven-Klavins/fizzbuzz/master/Screenshot.png";
  }

  render() {
    return (
      <div className="cardBox">
        <span className="repoTitle">{this.props.name}</span>

        <div className="description">
          {this.props.description}
          <br></br>
          <br></br>
          Last updated: {this.props.update.slice(0, 10)}{" "}
          {this.props.update.slice(11, 16)}
          <br></br>
          <br></br>
          Language: {this.props.language}
        </div>

        <div className="linkimg">
          <a
            className="description"
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              href={this.props.link}
              className="gitHubIcon"
              src={gitHubIcon}
              alt="GitHub Icon"
            ></img>
            Link
          </a>

          <img
            className="gitImage"
            src={
              "https://raw.githubusercontent.com/Steven-Klavins/" +
              this.props.name +
              "/master/Screenshot.png"
            }
            alt="Project ScreenShot"
            onError={this.addDefaultSrc}
          ></img>
        </div>
      </div>
    );
  }
}
export default Repo;
