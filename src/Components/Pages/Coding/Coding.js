import React from "react";
import "../../Pages/Coding/Coding.css";
import GitHubAPI from "../../GitHubAPI/GitHubAPI";

const Coding = (props) => {
  return (
    <div>
      <div className="upperMargin">
        <h1 className="codeTitle">Notable Projects</h1>
      </div>
      <div className="space">
        <GitHubAPI />
      </div>
    </div>
  );
};

export default Coding;
