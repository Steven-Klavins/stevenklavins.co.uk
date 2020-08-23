import React, { Suspense, lazy, Component } from "react";
import "../../Pages/Art/Art.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import ProjectBox from "../../ProjectBox/ProjectBox";
import guitar from "../../../obj/guitar.obj";
import loader from "../../../images/loader.gif";
const Viewer = lazy(() => import("../3D/Viewer"));

const animations = [
  [
    "https://www.youtube.com/watch?v=h0EVD_0ojoA",
    "A guitar concept I created based on the Strandberg Boden body design, created in Maya and Adobe After Effects.",
    "The Baphomet",
  ],
  [
    "https://www.youtube.com/watch?v=eaXS_lfDJlk",
    "A small animated introduction, I created in Maya and Adobe Premier pro for my band's YouTube page.",
    "Out Of Context Opening",
  ],

  [
    "https://www.youtube.com/watch?v=d0D3f8iECEE",
    "Stone Wolf Guitars logo animated, created in Maya and Adobe After Effects.",
    "Stone Wolf Guitars",
  ],
];

export default class Art extends Component {
  state = {
    position: 1,
  };

  moveFoward = () => {
    if (this.state.position < animations.length - 1) {
      let num = (this.state.position += 1);
      this.setState({ position: num });
    } else {
      this.setState({ position: 0 });
    }
  };

  moveBack = () => {
    if (this.state.position > 1 || this.state.position === 1) {
      let num = (this.state.position -= 1);
      this.setState({ position: num });
    } else {
      this.setState({ position: animations.length - 1 });
    }
  };

  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="artMargin"
      >
        <h1>Art</h1>

        <p className="artBox">
          I a BA in Digital Arts and foundation in graphics and over the years
          I've covered a large array of mediums and methods, primarily digital.
          The tech suites I use just to name a few include The Adobe Suite,
          Maya, Cinema 4D, Unreal Engine, and Wacom products.
        </p>

        <div>
          <h2>Uni Show Reel</h2>
          <div>
            <ReactPlayer
              className="videoPlayer"
              controls
              config={{
                file: {
                  attributes: {
                    controlsList: "nodownload",
                    disablePictureInPicture: "disablePictureInPicture",
                  },
                },
              }}
              onContextMenu={(e) => e.preventDefault()}
              url="https://www.dropbox.com/s/vj4anc4ijmy5ts9/Steven%20Klavins%202016-2018.mp4?raw=1"
            />

            <h2>Animation</h2>

            <ProjectBox
              params={animations[this.state.position]}
              moveFoward={this.moveFoward}
              moveBack={this.moveBack}
            />
          </div>
        </div>
      </motion.div>
    );
  }
}
