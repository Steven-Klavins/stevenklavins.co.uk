import React, { Component } from "react";
import { motion } from "framer-motion";
import "../../Pages/3D/3D.css";
import electronics from "../../../images/electronics.jpg";
import controlbox01 from "../../../images/controlBox01.jpg";
import controlbox02 from "../../../images/controlBox02.jpg";
import printing from "../../../images/printing.jpg";
import cameraDolly from "../../../images/camera_dolly.jpg";
import rollercoastercart from "../../../images/rollercoaster_cart.png";
import led from "../../../images/led01.jpg";

export default class threeD extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="threeDMargin"
      >
        <h1>3D Printing & Electronics</h1>

        <h2 className="threeDSubTitle ">3D Printing</h2>
        <p className="threeDDescription">
          I have been 3D modeling for around 8 years, however, never have those
          models left the digital realm. However, with the recent improvements
          in 3D printing technology and affordability, I finally got my hands on
          an Ender 5.
        </p>

        <div className="threeDImgContainer">
          <img
            className="threeDImg"
            src={printing}
            alt="Micro Controller Electronics"
          />
          <img className="threeDImg" src={cameraDolly} alt="Control Box" />
          <img className="threeDImg" src={controlbox01} alt="Control Box" />
        </div>

        <h2 className="threeDSubTitle">Electronics/Micro Controllers</h2>
        <p className="threeDDescription">
          Much like 3D printing electronics and the use of micro-controllers is
          a new venture of mine. There's something about using programming to
          observe or create movement in a physical space I find particularly
          exciting. I have been primarily using Arduino's and in doing so I've
          had the chance to dip my feet into the world of C++, stepper motors,
          proximity sensors, limit switches, and a whole new list of exciting
          challenges. <br></br> <br></br> I'm eager to see what I could
          potentially make combining my new-found skills in electronics and 3D
          printing. Robots, home automation, and an endless list of tech ideas
          spring to mind, it is indeed an exciting time to be alive.
        </p>

        <div className="threeDImgContainer">
          <img
            className="threeDImg"
            src={electronics}
            alt="Micro Controller Electronics"
          />
          <img className="threeDImg" src={led} alt="Control Box" />
          <img className="threeDImg" src={controlbox02} alt="Control Box" />
        </div>
        <h2 className="threeDSubTitle">
          Printing and programming a rollercoaster
        </h2>

        <p className="threeDDescription">
          Printing and programming a rollercoaster
        </p>
        <div className="threeDImgContainer">
          <img
            className="threeDImg"
            src={rollercoastercart}
            alt="Control Box"
          />
        </div>
      </motion.div>
    );
  }
}
