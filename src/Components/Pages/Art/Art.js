import React from "react";
import "../../Pages/Art/Art.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

const Art = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="artMargin"
    >
      <h1 className="artTitle">Art</h1>

      <div className="videoOuter">
        <div className="video">
          <ReactPlayer
            controls
            controlsList="nodownload"
            url="https://www.dropbox.com/s/vj4anc4ijmy5ts9/Steven%20Klavins%202016-2018.mp4?raw=1"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Art;
