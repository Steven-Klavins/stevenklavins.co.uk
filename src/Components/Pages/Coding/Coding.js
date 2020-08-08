import React from "react";
import "../../Pages/Coding/Coding.css";
import GitHubAPI from "../../GitHubAPI/GitHubAPI";
import IconsList from "../../../images/icons-list.png";

const Coding = (props) => {
  return (
    <div>
      <div className="upperMargin">
        <h1 className="codeTitle">Notable Projects</h1>
      </div>

      <div className="space">
        <GitHubAPI />
      </div>
      <div>
        <h2 className="skillsTitle">Skills</h2>
        <p className="skillsBox">
          I have worked with all kinds of tech in my time and I'm always up to
          the task of learning something new. As of recent, the majority of my
          work has been centered around React and vanilla Javascript. However, I
          also have experience working with Java, Python, Ruby, and android
          development. <br></br>
          <br></br> In my spare time, I've been known to tinker with
          microcontrollers and try my hand at game development. I have ample
          experience working with Adobe software, 3D modeling in Maya, and music
          production. I am an experienced tester and have the knowledge to work
          with a hand full of different databases, frameworks, and tools. I can
          follow TDD and BDD principles and have plenty of experience working in
          Agile environments remotely and in-person alike.
        </p>
      </div>
      <h2 className="skillsTitle">Tech vocabulary</h2>
      <div className="iconOuter">
        <img className="iconList" src={IconsList} alt="Icons list" />
      </div>
    </div>
  );
};

export default Coding;
