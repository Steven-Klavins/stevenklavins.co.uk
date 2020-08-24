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
import restraints01 from "../../../images/restraints01.jpg";
import restraints02 from "../../../images/restraints02.jpg";

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
          I have been 3D modeling for a total of almost 8 years now, but in
          spite of this those models have always remained stuck in the digital
          realm. However thanks to the recent innovations in 3D printing
          technology and affordability, this is no longer the case. I finally
          got my hands on an Ender 5 and it has opened up countless
          possibilities. It has been challenging learning all the quirks that
          come with 3D printing, it really is an art in itself. Never the less
          with a little persistence I now have my printer correctly calibrated
          and a decent understanding of 3D slicing software.<br></br>
          <br></br>
          As a developer, I love the challenge of solving a complex problem and
          this translates very well when I want to print a new gadget. It has
          allowed me to explore physical engineering and discover new
          perspectives on problem-solving as a broader subject.
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
          For the past few months, I have been giving deep thought on how I can
          combine my new-found skills. At present-day I have started two new
          projects, a Bluetooth controlled camera dolly and most notably a fully
          functional 3D rollercoaster. Ever since a young age, the engineering
          that falls behind theme park rides has fascinated me, so much so I
          built 3 Knex rollercoasters from the age of 8. Now I want to build the
          real deal, my plan is to use a combination of proximity sensors,
          stepper motors, and limit switches to program and build a small
          replica of a real functioning ride.
          <br></br> <br></br>
          This project, without doubt, will be a lengthy process but an
          enjoyable one without question. A lot of research is still needed to
          fully understand how rollercoasters track their trains and implement
          block systems. The project was largely inspired by this{" "}
          <a
            className="midTextLink"
            href="https://www.youtube.com/watch?v=zc7SxqoKL98"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>video </span>
          </a>{" "}
          and it gives great insight into what my end goal looks like. Please
          feel free to check out my{" "}
          <a
            className="midTextLink"
            href="https://twitter.com/klavinssteven"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Twitter </span>
          </a>{" "}
          and{" "}
          <a
            className="midTextLink"
            href="https://medium.com/@stevenklavins94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Medium </span>
          </a>{" "}
          as this is where I'll provide updates on the project.
        </p>

        <div className="threeDImgContainerBottom">
          <img
            className="threeDImg"
            src={restraints01}
            alt="3D printed restraints"
          />
          <img
            className="threeDImg"
            src={rollercoastercart}
            alt="Rollercoaster cart in Maya"
          />

          <img
            className="threeDImg"
            src={restraints02}
            alt="3D printed restraints"
          />
        </div>
      </motion.div>
    );
  }
}
