import React from "react";
import ReactPlayer from "react-player";
import "../../Pages/Home/Home.css";
import IntroAnimation from "../../IntroAnimation/IntroAnimation";
import { AnimatePresence, motion } from "framer-motion";

const Home = (props) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="topMargin"
    >
      <h1 class="openTitle">Bridging the gap between tech and art</h1>

      <div className="welcomeTextBox">
        <h2 className="subTitle">Welcome</h2>
        <p>
          Thank you so much for visiting my website! I'm a full-stack developer,{" "}
          <a
            className="midtextlink"
            href="https://makers.tech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Makers academy
          </a>{" "}
          graduate, and tech addict. I'm London based however I'm an experienced
          remote worker and have the flexibility to relocate/travel if need be.{" "}
          <br></br>
          <br></br>I hold a BA in Digital Arts, perform in a band, and have a
          love of all things creative. If your looking for someone with a
          yearning to make the world a better place through innovative tech I'm
          your guy! <br></br>
          <br></br>To be frank, its what gets me out of bed in the morning. Want
          to chat? Feel free to contact me on any of the listed platforms!
        </p>
      </div>
      <div>
        <IntroAnimation />
      </div>
      <div className="videoOuter">
        <div className="video">
          {/* <ReactPlayer
            controls
            url="https://www.dropbox.com/s/vj4anc4ijmy5ts9/Steven%20Klavins%202016-2018.mp4?raw=1"
          /> */}
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
