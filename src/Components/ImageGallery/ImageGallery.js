import React, { Component } from "react";
import "../ImageGallery/ImageGallery.css";
import axios from "axios";
import ImageGallery from "react-image-gallery";

export default class ImageGalleryAPI extends Component {
  state = {
    images: [],
  };

  getinfo() {
    axios
      .get(
        `https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.REACT_APP_API_KEY}&photoset_id=${this.props.gallery}&extras=url_o&format=json&nojsoncallback=1`
      )
      .then((res) => {
        this.setState({ images: res.data.photoset.photo });
      });
  }

  componentDidMount() {
    this.getinfo();
  }

  componentDidUpdate(nextProps) {
    if (this.props.gallery !== nextProps.gallery) {
      this.getinfo();
      return true;
    }
    if (this.state.images.length < 1) {
      this.getinfo();
      return true;
    } else {
      return false;
    }
  }

  render() {
    let arr = [];

    let imageStrings = JSON.parse(JSON.stringify(this.state.images));

    let i;

    for (i = 0; i < imageStrings.length; i++) {
      if (i === this.props.limit) {
        break;
      } else {
        arr.push({
          original: imageStrings[i].url_o,
          thumbnail: imageStrings[i].url_o,
        });
      }
    }

    return <ImageGallery items={arr} />;
  }
}
