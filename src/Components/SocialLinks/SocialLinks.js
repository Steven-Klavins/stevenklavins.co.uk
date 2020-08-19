import React from "react";
import "../SocialLinks/SocialLinks.css";
import Twitter from "../../images/twitter-logo.png";
import LinkedIn from "../../images/linkedin-logo.png";
import Medium from "../../images/medium-logo.png";
import Github from "../../images/github-logo.png";

const SocialLinks = (props) => (
  <div className="linkPosition">
    <div className="linkRow">
      <div className="section">
        <a
          href="https://www.linkedin.com/in/steven-klavins-90b02a199/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="imgLink" src={LinkedIn} alt="LinkedIn"></img>
          <span className="fontLink">LinkedIn</span>
        </a>
      </div>

      <div className="section">
        <a
          href="https://github.com/Steven-Klavins"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="imgLink" src={Github} alt="GitHub"></img>
          <span className="fontLink">GitHub</span>
        </a>
      </div>

      <div className="section">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img className="imgLink" src={Twitter} alt="Twitter"></img>
          <span className="fontLink">Twitter</span>
        </a>
      </div>

      <div className="section">
        <a
          href="https://medium.com/@stevenklavins94"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="imgLink" src={Medium} alt="Medium"></img>
          <span className="fontLink">Medium</span>
        </a>
      </div>
    </div>
  </div>
);

export default SocialLinks;
