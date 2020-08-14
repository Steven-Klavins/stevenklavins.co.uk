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
      {/* <div className="midAlbum">
        <div>
          <div className="album">
            <FlickrLightbox
              api_key={process.env.REACT_APP_API_KEY}
              user_id="189653295@N04"
              album_id="72157715469599206"
              limit={24}
            />
          </div>
        </div>
      </div> */}
      <h2 className="photographySubTitle">Nature Photography</h2>
      <div className="gallery">
        <ImageGalleryAPI gallery="72157715469599206" />
      </div>
    </motion.div>
  );
};

export default Photography;
