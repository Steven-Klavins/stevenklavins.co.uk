import React from "react";
import "../../Pages/Photography/Photography.css";

const Photography = () => {
  return (
    <div className="photographyMargin">
      <h1 className="photographyTitle">Photography</h1>

      <div className="album">
        <a
          data-flickr-embed="true"
          data-footer="true"
          href="https://www.flickr.com/photos/189653295@N04/albums/72157715421892253"
          title="Band Photography "
        >
          <img
            src="https://live.staticflickr.com/65535/50206921332_bd39dffdc0_z.jpg"
            width="427"
            height="640"
            alt="Band Photography "
          ></img>
        </a>
        <script
          async
          src="//embedr.flickr.com/assets/client-code.js"
          charset="utf-8"
        ></script>
      </div>
    </div>
  );
};

export default Photography;
