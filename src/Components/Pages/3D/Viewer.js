import React, { Component } from "react";
import { OBJModel, DirectionLight } from "react-3d-viewer";

export default class ImageGalleryAPI extends Component {
  render() {
    return (
      <OBJModel src={this.props.object} position={{ x: 0, y: 0, z: -0.2 }}>
        <DirectionLight color={this.props.color} />
      </OBJModel>
    );
  }
}
