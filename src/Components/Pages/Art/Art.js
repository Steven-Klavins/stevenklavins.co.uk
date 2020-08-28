import React, { Suspense, lazy, Component } from "react";
import "../../Pages/Art/Art.css";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import ProjectBox from "../../ProjectBox/ProjectBox";
import guitar from "../../../obj/guitar.obj";
import loader from "../../../images/loader.gif";
const Viewer = lazy(() => import("../../Viewer/Viewer"));

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
          Presently, I hold a BA in Digital Arts, a foundation in graphics, and
          over the years I've explored a large array of mediums and
          methodologies, primarily digital. The software suites I use just to
          name a few include The Adobe Suite, Maya, Cinema 4D, and Unreal
          Engine. I have a keen taste for gothic fantasy art and love the work
          of artists such as HR Gieger, Anne Stokes, and Ben Erdt. <br></br>
          <br></br>
          From time to time I'll visit London museums such as the V&A to draw
          statues and brush up on my anatomy skills, and on occasion, I may get
          out some acrylic paints. Truth be told however I'll usually stick to
          my graphics tablet, Maya, or a pen and paper (the clean up is a lot
          easier!).
        </p>

        <ProjectBox
          params={animations[this.state.position]}
          moveFoward={this.moveFoward}
          moveBack={this.moveBack}
        />
        <h2>Uni Show Reel</h2>
        <p className="artBox">
          As previously mentioned I hold a BA in Digital Arts, at university was
          the first place I started to explore 3D modeling, and for a brief
          period of time, we even learned the basics of game development and
          videography. It was at this time I learned how to properly manage a
          project within a team. My career has been far less 3D focused these
          days however it's still a medium I hold a keen interest in.
        </p>
        <div>
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

            {/* <h2>3D Modelling</h2>

            <Suspense
              fallback={
                <div className="loader">
                  {" "}
                  <p>Loading model...</p>
                  <img src={loader} alt="Loading model..."></img>
                </div>
              }
            >
              {" "}
              <p className="artBox">
                <span className="modelDescription">
                  <br></br>
                  <br></br> Want to get a better look at one of my 3D models?
                  Use your mouse and scroll button to explore my guitar concept
                  "The Baphomet".
                </span>
              </p>
              <div className="modelView">
                <Viewer object={guitar} />
              </div>
            </Suspense> */}
          </div>
        </div>
      </motion.div>
    );
  }
}
