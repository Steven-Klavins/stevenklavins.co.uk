import React, { Component, setState } from "react";
import "../../Pages/Photography/Photography.css";
import { motion } from "framer-motion";
import ImageGalleryAPI from "../ImageGallery/ImageGallery";

const albums = ["72157715490137388", "72157715488906066"];

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
        <h2 className="photographySubTitle">Band Photography</h2>
        <li className="galleryTitles">
          <button onClick={() => this.setState({ album: 0 })}>Nature</button>
          <button onClick={() => this.setState({ album: 1 })}>
            Band Photography
          </button>
          <button>Scenery</button>
          <button>Misc</button>
        </li>
        <div className="gallery">
          <ImageGalleryAPI gallery={albums[this.state.album]} limit={12} />
        </div>
      </motion.div>
    );
  }
}
