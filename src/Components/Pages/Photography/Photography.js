import React, { Component, lazy, Suspense } from "react";
import "../../Pages/Photography/Photography.css";
import { motion } from "framer-motion";
import loader from "../../../images/loader.gif";
const ImageGalleryAPI = lazy(() => import("../../ImageGallery/ImageGallery"));

const albums = [
  "72157715490137388",
  "72157715488906066",
  "72157715520527713",
  "72157715520970422",
];

export default class Photography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      album: 0,
    };
  }

  render() {
    return (
      <motion.div
        exit={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        className="photographyMargin"
      >
        <h1 className="photographyTitle">Photography</h1>

        <p className="photographyTextBox">
          If there's something interesting to be seen or a notable event
          happening there's a good chance I'll be there with my camera. I
          primarily shoot band photography however, anything that piques my
          interest or looks the part I will try and capture in a photograph.{" "}
          <br></br> <br></br>You can discover more of my photography either on
          my{" "}
          <a
            className="photographyLink"
            href="https://www.facebook.com/Steven-Klavins-Photography-1795511440735461"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook page
          </a>{" "}
          or{" "}
          <a
            className="photographyLink"
            href="https://www.flickr.com/photos/189653295@N04/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flickr{" "}
          </a>
        </p>

        <li className="galleryTitles">
          <button onClick={() => this.setState({ album: 0 })}>► Nature</button>
          <button onClick={() => this.setState({ album: 1 })}>► Music</button>
          <button onClick={() => this.setState({ album: 2 })}>► Scenery</button>
          <button onClick={() => this.setState({ album: 3 })}>► Misc</button>
        </li>
        <div className="gallery">
          <Suspense
            fallback={
              <div className="loader">
                {" "}
                <p>Loading Album</p>
                <img src={loader} alt="Loading..."></img>
              </div>
            }
          >
            <ImageGalleryAPI gallery={albums[this.state.album]} limit={12} />
          </Suspense>
        </div>
      </motion.div>
    );
  }
}
