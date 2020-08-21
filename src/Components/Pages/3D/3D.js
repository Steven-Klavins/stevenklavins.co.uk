import React, { Suspense, lazy, Component } from "react";
import { motion } from "framer-motion";

import ProjectBox from "../../ProjectBox/ProjectBox";
import "../../Pages/3D/3D.css";
import guitar from "../../../obj/guitar.obj";
import loader from "../../../images/loader.gif";
const Viewer = lazy(() => import("../3D/Viewer"));

const animations = [
  [
    "https://www.youtube.com/watch?v=h0EVD_0ojoA",
    "this is a test",
    "The Baphomet",
  ],
  [
    "https://www.youtube.com/watch?v=eaXS_lfDJlk",
    "this is a test",
    "Out Of Context Opening",
  ],

  [
    "https://www.youtube.com/watch?v=d0D3f8iECEE",
    "this is a test",
    "Stone Wolf Guitars",
  ],
];

export default class threeD extends Component {
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
        className="threeDMargin"
      >
        <h1 className="threeDTitle">3D Modelling & Printing</h1>

        <Suspense
          fallback={
            <div className="loader">
              {" "}
              <p>Loading Album</p>
              <img src={loader} alt="Loading..."></img>
            </div>
          }
        >
          <div className="modalView">
            <Viewer color={0x565d5d} object={guitar} />
          </div>
        </Suspense>
        <h2 className="threeDSubTitle ">Animation</h2>
        <ProjectBox
          params={animations[this.state.position]}
          moveFoward={this.moveFoward}
          moveBack={this.moveBack}
        />
        <h2 className="threeDSubTitle ">3D Printing</h2>
      </motion.div>
    );
  }
}
