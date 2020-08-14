import React from "react";
import "../../Pages/Photography/Photography.css";
import FlickrLightbox from "react-flickr-lightbox";
import { AnimatePresence, motion } from "framer-motion";
import ImageGalleryAPI from "../ImageGallery/ImageGallery";

const Photography = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      className="photographyMargin"
    >
      <h1 className="photographyTitle">Photography</h1>
      <h2 className="photographySubTitle">Band Photography</h2>
      <div className="gallery">
        <ImageGalleryAPI gallery="72157715488906066" limit={12} />
      </div>

      <h2 className="photographySubTitle">Nature Photography</h2>
      <div className="gallery">
        <ImageGalleryAPI gallery="72157715490137388" limit={12} />
      </div>
    </motion.div>
  );
};

export default Photography;
