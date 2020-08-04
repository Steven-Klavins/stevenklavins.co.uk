import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SlideDrawer/BackDrop";
import SlideDrawer from "../src/Components/SlideDrawer/SlideDrawer";

class App extends Component {
  state = {
    SlideDrawerOpen: false,
  };

  drawClickHandler = () => {
    this.setState((prevState) => {
      return { SlideDrawerOpen: !prevState.SlideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ SlideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.SlideDrawerOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div className="App">
        <NavBar drawClickHandler={this.drawClickHandler} />
        <SlideDrawer show={this.state.SlideDrawerOpen} />
        {backDrop}
      </div>
    );
  }
}

export default App;
