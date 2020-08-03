import React, { Component } from "react";
import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import BackDrop from "../src/Components/SideDrawer/BackDrop";
import SideDrawer from "../src/Components/SideDrawer/SideDrawer";
import { render } from "@testing-library/react";

class App extends Component {
  state = {
    sideDrawerOpen: false,
  };

  drawClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backDrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div className="App">
        <NavBar drawClickHandler={this.drawClickHandler} />
        {sideDrawer}
        {backDrop}

        <p>Page content</p>
      </div>
    );
  }
}

export default App;
