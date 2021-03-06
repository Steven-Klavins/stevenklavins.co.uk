import React, { Suspense, lazy } from "react";
import "../../Pages/Coding/Coding.css";
import { motion } from "framer-motion";
import loader from "../../../images/loader.gif";
import IconsList from "../../../images/icons-list.png";
const GitHubAPI = lazy(() => import("../../GitHubAPI/GitHubAPI"));

const Coding = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
    >
      <div className="upperMargin">
        <h1>Software/Web Development</h1>
      </div>
      <h2>Notable Projects</h2>

      <div className="projectsContainer">
        <Suspense
          fallback={
            <div className="loader">
              {" "}
              <p>Loading projects</p>
              <img src={loader} alt="Loading..."></img>
            </div>
          }
        >
          <GitHubAPI />
        </Suspense>
      </div>
      <div>
        <h2>Skills</h2>
        <p className="skillsDescription">
          I have worked with all kinds of tech in my time and I'm always up to
          the challenge of learning something new. As of recent, the majority of
          my work has been centered around React and vanilla Javascript.
          However, I also enjoy working with technologies such as Java, Python,
          Ruby, and Android studio. <br></br>
          <br></br> In my spare time, I've been known to tinker with
          micro-controllers and like to try my hand in game development. Many
          things pique my interest, whether it be AI, machine learning, or
          automation. However, it's a colossal task to pursue everything I love
          so prioritizing is key.  I am an experienced tester and have the
          knowhow to follow TDD and BDD workflows. Admittedly this can be tricky
          when working with new tech or within the constraints of a tight
          timescale but I try my best.<br></br>
          <br></br>
          Throughout my projects, you will find a hand full of different
          databases, frameworks, and tools. I'm an Agile team player and utilize
          tech such as slack, Miro, and Trello to aid the process. If you would
          like an in-depth look at a project workflow please have a read of{" "}
          <a
            className="midTextLink"
            href="https://github.com/FayeCarter/WhatStack/blob/master/README.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatStack's documentation
          </a>
          .
        </p>
      </div>
      <h2>Tech vocabulary</h2>
      <p className="skillsDescription">
        I'm continuously adding to this list however for ease of viewing here
        are some of the technologies I use. I hope to pursue some C# programming
        in the coming year, who knows what else I may stumble upon in the
        process. Please feel free to browse through my{" "}
        <a
          href="https://github.com/Steven-Klavins"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub{" "}
        </a>
        to see what I'm working on at present.
        <br></br>
        <br></br>
        <span className="languages">
          •Rails •React •RSpec •Ruby •Slack •Python •MongoDB •Miro •Javascript
          •Java •Jasmine •VScode •Postgresql •NodeJS{" "}
        </span>
      </p>
      <div className="iconListOuter">
        <img className="iconList" src={IconsList} alt="Tech Icons list" />
      </div>
    </motion.div>
  );
};

export default Coding;
