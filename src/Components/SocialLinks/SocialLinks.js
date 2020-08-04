import React from "react";
import "../SocialLinks/SocialLinks.css";
import Twitter from "../../images/twitter-logo.png";
import LinkedIn from "../../images/linkedin-logo.png";
import Medium from "../../images/medium-logo.png";
import Github from "../../images/github-logo.png";

const SocialLinks = (props) => (
  <div className="linkRow">
    <div className="section">
      <a href="https://twitter.com">
        <img className="imgLink" src={LinkedIn}></img>
        <span className="fontLink">LinkedIn</span>
      </a>
    </div>

    <div className="section">
      <a href="https://twitter.com">
        <img className="imgLink" src={Github}></img>
        <span className="fontLink">GitHub</span>
      </a>
    </div>

    <div className="section">
      <a href="https://twitter.com">
        <img className="imgLink" src={Twitter}></img>
        <span className="fontLink">Twitter</span>
      </a>
    </div>

    <div className="section">
      <a href="https://twitter.com">
        <img className="imgLink" src={Medium}></img>
        <span className="fontLink">Medium</span>
      </a>
    </div>
  </div>
);

export default SocialLinks;
