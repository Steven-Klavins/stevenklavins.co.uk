import React, { useEffect, useState, Component, props } from "react";
import "../ImageGallery/ImageGallery.css";
import axios from "axios";
import ImageGallery from "react-image-gallery";

export default class ImageGalleryAPI extends Component {
  //   api_key = process.env.REACT_APP_API_KEY;
  //   api_url = `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${api_key}&photoset_id=${props.gallery}&extras=url_o&format=json&nojsoncallback=1`;

  state = {
    images: [],
  };

  componentDidMount() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.REACT_APP_API_KEY}&photoset_id=${this.props.gallery}&extras=url_o&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({ images: res.data.photoset.photo });
      });
  }

  render() {
    let arr = [];
    JSON.parse(JSON.stringify(this.state.images)).forEach(function (element) {
      arr.push({ original: element.url_o, thumbnail: element.url_o });
    });

    console.log(arr);

    return <ImageGallery fullscreen={false} items={arr} />;
  }
}
