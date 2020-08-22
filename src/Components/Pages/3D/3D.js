import React, { Suspense, lazy, Component } from "react";
import { motion } from "framer-motion";
import "../../Pages/3D/3D.css";
import guitar from "../../../obj/guitar.obj";
import loader from "../../../images/loader.gif";
import electronics from "../../../images/electronics.jpg";
import controlbox01 from "../../../images/controlBox01.jpg";
import controlbox02 from "../../../images/controlBox02.jpg";
import printing from "../../../images/printing.jpg";
import cameraDolly from "../../../images/camera_dolly.jpg";
import rollercoastercart from "../../../images/rollercoaster_cart.png";
import led from "../../../images/led01.jpg";
const Viewer = lazy(() => import("../3D/Viewer"));

export default class threeD extends Component {
  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="threeDMargin"
      >
        <h1 className="threeDTitle">3D Printing & Electronics</h1>

        <h2 className="threeDSubTitle ">3D Printing</h2>

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

        <div className="threeDImgContainer">
          <img
            className="threeDImg"
            src={electronics}
            alt="Micro Controller Electronics"
          />
          <img className="threeDImg" src={led} alt="Control Box" />
          <img className="threeDImg" src={controlbox02} alt="Control Box" />
        </div>

        {/* <Suspense
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
        </Suspense> */}
      </motion.div>
    );
  }
}
