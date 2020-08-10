import React from "react";
import "../../Pages/Photography/Photography.css";
import FlickrLightbox from "react-flickr-lightbox";

const Photography = () => {
  return (
    <div className="photographyMargin">
      <h1 className="photographyTitle">Photography</h1>
      <h2 className="photographySubTitle">Band Photography</h2>
      <div className="midAlbum">
        <div>
          <div className="album">
            <FlickrLightbox
              api_key={process.env.REACT_APP_API_KEY}
              user_id="189653295@N04"
              limit={12}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Photography;
